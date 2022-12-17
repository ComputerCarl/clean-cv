---
slug: apollo-tailwind-project
title: A Project Using Tailwind CSS, React, and Apollo
tags: [frontend, UX, GraphQL, Apollo, Tailwind CSS]
featuredImage: https://cloud.upchunk.com/s/zzJAwzMxEJm3daE/download
featuredAltText: Diagram showing wireframe to finished components
---


## Challenges
* Many design elements already existed in the UI, but no design boards were made available. I often had to go through existing code to find a similar element.
* The backend was engineered and developed by another team using PHP Laravel.
* The design of the project had already been created, and I was expected to create a fluid experience.
* As debated in an official Tailwind CSS video overview, the benefits of creating React-style components while using Tailwind CSS are overshadowed by having the benefit of TWCSS concise syntax. This often involves a lot of copying and pasting.
* Making small modifications to TWCSS can be challenging, as the entire class name must be provided, rather than using numeric variables. (e.g., where `p-4` produces a certain amount of padding, `p-${someNumber}` would fail to be produced in the final CSS files.)
* There were no logic flows provided, so I would have to often ask or assume the events triggered by a user action.
* There were multiple teams, including the back-end team; and a separate front-end team, which had already designed and implemented much of the UX.

![A sharp table component](https://cloud.upchunk.com/s/xskPotZty9qd7Yo/download)

## Solution
* Created finite-state machines for complex UI logic.
* Created multiple modal and popup components.
* Implemented Google geocoding resolutions.
* Managed Apollo loading states for UX including loading indicators and error states.
* Manually merged cache states in Apollo.
* Programmed NextJS logic for views and data.
* Interpreted wireframe diagrams and created views and logic from those diagrams. 
* Managed Jira issues for a small team of developers and a supervisor.
* Created OpenVPN Docker container to manage VPN access to development database. 
* Created responsive layouts in all views.
* Implemented Apollo subscriptions for multiple views.
* Created logic diagrams of UX where necessary.
* Used Storybook JS to develop components in isolation.
* Resolved Webpack errors between Storybook and project framework.
* Used React, GraphQL, Apollo, and Tailwind to create components and views for the application.
* Added form upload functionality using GraphQL
* Used Insomnia to test HTML transactions.
* Tested mobile and tablet views in XCode simulators.
* Created PHP Docker container to develop using local backend.
* Added pagination features in Apollo.