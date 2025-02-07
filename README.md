# Dark Mode Demo
This repo is a barebones setup for a dark-mode toggle system which reads the user's preferences to determine whether dark-mode should be engaged or disabled initially. This demo also aims to avoid the initial theme flicker which can happen on initial render, if we don't know the user preferences on beforehand.

It was put together as plainly as possible to show how dark-mode can be implemented without the noise of other things like authentication systems or database setups.

The demo largely follows [Matt Stobbs methodology](https://www.mattstobbs.com/remix-dark-mode-2024/) and utilizes the [client-hints](https://github.com/epicweb-dev/client-hints) package by Kent C. Dodds as well as the [cookie parser and serializer](https://github.com/jshttp/cookie) by jshttp. This demo has been somewhat modified to remove a few packages that were in Matt Stobbs guide, and to work in React Router v7.

## Client-Hints
A common issue with dark mode toggles in server-rendered react is getting the initial user settings while preserving a good user experience. We don't want the color scheme to initially flash the wrong theme by rendering a page before javascript can run and detect the user settings. With client-hint cookies we can get the user's preferences by just grabbing the headers, and then make use of that information when we're actually rendering a page. The drawback of this method is a one-time cost of reloading the page to set the cookies when the user first visits our site or when they change their preferences.

For more information and a more detailed explanation of client-hints, [go here](https://github.com/epicweb-dev/client-hints)

## Optimistic Updates
In react router, the form data is available to us while the form request is in flight. This means that we can optimistically change the theme of our app without having to wait for our form submission to complete. This primarily benefits users with slow network speeds, but even with a fast connection the user experience is noticably reduced if you have to wait for a network request to complete before your theme updates.

More information about Optimistic UI in React Router can be found [here](https://reactrouter.com/start/framework/pending-ui#optimistic-ui)

## Progressive Enhancement
This toggle also works if JavaScript is disabled. However, the switching is then done with a standard form post request rather than a fetch.