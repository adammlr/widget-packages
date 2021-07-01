This repo is used as an example to show how to expose react components as javascript "widgets" for standalone consumption, but also has a separate package that consumes them directly (as react components) in a website.

To run the website as a whole, use `yarn start`

To run the website and load widgets use `yarn build` then run an http server in the packages/website/dist folder and load the /widgets.html file.

Built with Webpack.

Uses [Preact](https://preactjs.com/) in place of React, but that's not a requirement, just an experiment.  However it does serve the purpose of reducing the file size of the standalone widget javascript bundles.