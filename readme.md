This repo uses yarn packages to expose react components as javascript "widgets" and then has a separate package that consumes them directly in a website.

To run the website as a whole, use `yarn start`

To run the website and load widgets use `yarn build` then run an http server in the packages/website/dist folder and load the /widgets.html file.

Uses Preact in place of React, but that's not a requirement, just an experiment.