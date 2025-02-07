import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { ClientHintCheck, getHints } from "./utils/client-hints";
import type { LoaderFunctionArgs } from "react-router";
import { useTheme } from "./routes/theme-switch";
import { getTheme, type Theme } from "./utils/theme.server";

export async function loader({ request }: LoaderFunctionArgs) {
	return ({
		requestInfo: {
			hints: getHints(request),
			userPrefs: { theme: getTheme(request) },
			path: new URL(request.url).pathname
		}
	})
}

export function Document({ children, theme = 'light' }: { children: React.ReactNode, theme?: Theme }) {
	return (
		<html lang="en" className={theme}>
			<head>
				<ClientHintCheck />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	const theme = useTheme()
	return (
		<Document theme={theme.selected ?? theme.hinted}>
			<Outlet />
		</Document>
	)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<Document>
			<main className="pt-16 p-4 container mx-auto">
				<h1>{message}</h1>
				<p>{details}</p>
				{stack && (
					<pre className="w-full p-4 overflow-x-auto">
						<code>{stack}</code>
					</pre>
				)}
			</main>
		</Document>
	);
}
