import type { Route } from "./+types/home";
import { ThemeSwitch } from "./theme-switch";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<main className="bg-slate-50 dark:bg-slate-950 flex flex-col min-h-svh items-center justify-center">
			<section className="flex flex-col gap-3 border bg-slate-200 dark:bg-slate-900 border-slate-500 dark:border-slate-700 w-[500px] max-w-[calc(100svw_-_1.5rem)] rounded-md">
				<div className="border-b border-slate-500 dark:border-slate-700 p-3">
					<h1 className="text-2xl text-slate-600 dark:text-slate-300">
						Dark Mode Demo
					</h1>
				</div>
				<div className="flex flex-col gap-3 items-center px-3 pb-3">
					<p className="text-slate-600 dark:text-slate-300">
						Click to toggle dark mode
					</p>
					<div>
						<ThemeSwitch />
					</div>
				</div>
			</section>
		</main>
	);
}
