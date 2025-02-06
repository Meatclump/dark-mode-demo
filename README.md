# Dark Mode Demo
This repo is a barebones setup for a dark-mode toggle system which reads the user's preferences to determine whether dark-mode should be engaged or disabled initially. This demo also aims to avoid the initial theme flicker which can happen on initial render, if we don't know the user preferences on beforehand.

It was put together as plainly as possible to show how dark-mode can be implemented without the noise of other stuff such as authentication systems or database setups.

The demo largely follows [Matt Stobbs methodology](https://www.mattstobbs.com/remix-dark-mode-2024/) and utilizes the [client-hints](https://github.com/epicweb-dev/client-hints) package by Kent C. Dodds.