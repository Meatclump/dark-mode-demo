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
			<section className="flex flex-col border bg-slate-200 dark:bg-slate-900 border-slate-500 dark:border-slate-700 max-w-[calc(100svw_-_1.5rem)] rounded-md">
				<div className="border-b border-slate-500 dark:border-slate-700 p-3">
					<h1 className="text-3xl text-slate-600 dark:text-slate-300">
						Dark Mode Demo
					</h1>
				</div>
				<div className="flex flex-col gap-3 items-center border-b border-slate-500 dark:border-slate-700 p-3">
					<ul className="text-lg list-disc list-inside text-slate-600 dark:text-slate-300">
						<li>Automatically detects user settings</li>
						<li>No flicker on initial page load</li>
						<li>Remembers user selection</li>
						<li>Progressive enhancement when JavaScript is disabled</li>
					</ul>
				</div>
				<div className="flex flex-col gap-3 items-center border-b border-slate-500 dark:border-slate-700 p-3 bg-slate-100 dark:bg-slate-800">
					<p className="text-lg text-slate-600 dark:text-slate-300">
						Press to toggle dark mode
					</p>
					<div>
						<ThemeSwitch />
					</div>
				</div>
				<div className="flex flex-col gap-3 items-center p-3">
					<a href="https://github.com/Meatclump/dark-mode-demo" title="See on GitHub" className="rounded-full focus:outline-2 focus:outline-offset-2 focus:outline-violet-500">
						<img
							alt="See on GitHub"
							className="w-8 h-8 brightness-0 invert-25 dark:invert-100 hover:invert-0 hover:dark:invert-75"
							src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5Ny42IDk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ny42IDk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzFCMUYyNDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OC45LDBDMjEuOCwwLDAsMjIsMCw0OS4yQzAsNzEsMTQsODkuNCwzMy40LDk1LjljMi40LDAuNSwzLjMtMS4xLDMuMy0yLjRjMC0xLjEtMC4xLTUuMS0wLjEtOS4xCgljLTEzLjYsMi45LTE2LjQtNS45LTE2LjQtNS45Yy0yLjItNS43LTUuNC03LjItNS40LTcuMmMtNC40LTMsMC4zLTMsMC4zLTNjNC45LDAuMyw3LjUsNS4xLDcuNSw1LjFjNC40LDcuNSwxMS40LDUuNCwxNC4yLDQuMQoJYzAuNC0zLjIsMS43LTUuNCwzLjEtNi42Yy0xMC44LTEuMS0yMi4yLTUuNC0yMi4yLTI0LjNjMC01LjQsMS45LTkuOCw1LTEzLjJjLTAuNS0xLjItMi4yLTYuMywwLjUtMTNjMCwwLDQuMS0xLjMsMTMuNCw1LjEKCWMzLjktMS4xLDguMS0xLjYsMTIuMi0xLjZzOC4zLDAuNiwxMi4yLDEuNmM5LjMtNi40LDEzLjQtNS4xLDEzLjQtNS4xYzIuNyw2LjgsMSwxMS44LDAuNSwxM2MzLjIsMy40LDUsNy44LDUsMTMuMgoJYzAsMTguOS0xMS40LDIzLjEtMjIuMywyNC4zYzEuOCwxLjUsMy4zLDQuNSwzLjMsOS4xYzAsNi42LTAuMSwxMS45LTAuMSwxMy41YzAsMS4zLDAuOSwyLjksMy4zLDIuNEM4My42LDg5LjQsOTcuNiw3MSw5Ny42LDQ5LjIKCUM5Ny43LDIyLDc1LjgsMCw0OC45LDB6Ii8+Cjwvc3ZnPgo="
						/>
					</a>
				</div>
			</section>
		</main>
	);
}
