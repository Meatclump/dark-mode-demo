import { useRouteLoaderData } from "react-router";
import { type loader as rootLoader } from "../root"

export function useRequestInfo() {
	const data = useRouteLoaderData<typeof rootLoader>('root')
	if (!data?.requestInfo) {
		throw Error("No requestInfo found in root loader")
	}
	return data.requestInfo
}