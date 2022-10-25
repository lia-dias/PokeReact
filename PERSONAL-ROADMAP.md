# My Personal Roadmap Development Process
I intend to register the process I followed and the questions I raised in the process. It's importanted to note that I'm not a ReactJS expert either an front-end developer expert, so I not intend to write a guide, just the steps I took during process.

# Initial Configuration
So, reading the current React documentation one way to do it is creating a simple HTML file and inject the React code on it. So I created a simple Hello World. The only tag I used on the `head` tag was `title` tag. Should I've used another one?

Adding React was pretty simples, just adding some tags at the end of the `body` tag (the location is very important, the container have to exists to be injected by React) and creating the React component simple as it is.
I used the JSX syntax, but it's not default handled by React, so I've to manually install it too. The description to how to use it is described on React documentation. But essentially was necessary to create a npm package and add babel to it, exporting as react-app. I confess I'm not used to babel, but it's working for what I need right now. 
Because it's preprocessing the content, it's necessary to create a `dist` folder. So it was done and my `index.html` now points to `/dist/app.js` to inject React.
Since we are already using a npm package, makes sense to create a live server to hotreload those files and auto parse the JSX. A preprocessor for SCSS was also included.

A .gitignore file was necessary due to the dist files.