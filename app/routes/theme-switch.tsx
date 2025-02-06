import { useId } from "react"
import type { ActionFunctionArgs } from "react-router"
import { useFetcher } from "react-router"
import { useHints } from "~/utils/client-hints"
import { useRequestInfo } from "~/utils/request-info"
import { setTheme, type Theme } from "~/utils/theme.server"

export function useTheme() {
	const hints = useHints()
	const requestInfo = useRequestInfo()
	return {
		selected: requestInfo.userPrefs.theme,
		hinted: hints.theme
	}
}

export async function action({ request }: ActionFunctionArgs) {
	const formResponse = await request.formData()
	const formData = Object.fromEntries(formResponse)

	if (!formData.theme) throw Error("Theme submission error")

	const themeOptions = ['light', 'dark', 'system']
	const newThemeValue = themeOptions.find(entry => entry === formData.theme) as Theme

	if (!newThemeValue) throw Error("Theme submission error")

	const responseInit = {
		headers: { 'set-cookie': setTheme(newThemeValue) },
	}

	return Response.json({ result: newThemeValue }, responseInit)
}

export function ThemeSwitch() {
	const { selected } = useTheme()
	const fetcher = useFetcher()
	const id = useId()

	const mode = selected ?? 'system'
	const nextMode = mode === 'system'
		? 'light'
		: mode === 'light'
			? 'dark'
			: 'system'
	
	const modeLabel = { light: "Light", dark: "Dark", system: "System" }

	return (
		<>
			<button
				form={id}
				type="submit"
				name="theme"
				value={nextMode}
				className="flex rounded px-2 py-1 border border-slate-500 bg-slate-300 dark:bg-slate-700 dark:border-slate-500 text-slate-500 dark:text-slate-300"
			>
				{modeLabel[mode]}
			</button>
			<fetcher.Form id={id} method="POST" action="/theme-switch" />
		</>
	)
}