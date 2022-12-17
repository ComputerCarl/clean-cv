---
slug: asp-classic-react-tailwind
title: An ASP Classic Forms Project Enhanced with React
tags: [front end, ASP, UX, GraphQL, Apollo, Tailwind CSS]
featuredImage: https://cloud.upchunk.com/s/8BWwZJxbwQDQEQo/download
featuredAltText: Old interface vs new
---


## Challenges
* Much of the interface had been written more than 15 years ago using ASP Classic.
* The project owner decided to do things piecemeal.
* In ASP, like PHP, there may be several pages involved in a process; one page may display a form, possibly submitted to a different page, and then possibly also redirected to yet another to display results.
* There is no "API" available.
* While engineering this solution, I was told the original ASP developer would be available to implement the ASP portions of the project. From the start of the project, there was no ASP developer available, so I assumed the role. Being that I was unfamiliar with both ASP and VBScript, the project took longer than anticipated and is still ongoing in piecemeal stages.

![An updated interface using React](https://cloud.upchunk.com/s/wnwjDq46gapCFE5/download)

## Solution
* Learned ASP Classic and created a local test environment.
* Learned VBScript to modify the ASP pages where necessary on render.
* Created interactive components in React.
* Created finite-state machines to prevent invalid form data submissions.
* Tested views in browser and using XCode for mobile and tablet views.
* Modify/constructed SQL queries to pull relevant data.
* Created a live staging environment for project members to approve changes.
* I redesigned a couple of views by cleaning them of archaic code and inline CSS and added Tailwind CSS to style them.
* To avoid, as much as possible, re-engineering the ASP application's business logic, to save the client money, and avoid having to create an API, I used the same page names to conduct the same abstract functionality.
* To avoid the inherent copying and pasting which comes along with old-style web development, most views were recreated in React.
* Utilized Vite as a development environment and to build the page assets.
* Wrote a script to replace the asset requirements in all affected ASP pages, thus resolving caching issues with shared assets.
* Copied the ASP page from the original server, stripped them of everything but skeleton HTML, reused/wrote SQL queries and pulled data, then created a React application to cover that portion of the web application.
* Used Tailwind CSS to make responsive components and views.
* Rendered ASP pages with JavaScript variables containing data necessary to build the React views.