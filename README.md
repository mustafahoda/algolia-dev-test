# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Algolia Interview Findings

Technologies Used:

- React for FrontEnd JS Library
- Typescript for a better developer experience during build-time
- Ant Design for quick and beautiful React Components to make the App visually appealing
- Algolia to quickly be able to search on indexed data

The hopes of this project was to quickly demonstrate my capabalities as a Solutions Engineer and how I'm able to prototype and build a Proof of Concept by reading Algolia Documents. As far as my experience with Algolia went, it was pretty straightforward! The documentation is thorough and complete. In-dashboard was experience and the hints guided me along with the way especially as a first time user.

Feedback for the Algolia Team:
The one thing that made setup really difficult for me was lack of Typescript Dcoumentation. I chose to use Typescript to demonstrate my capabilities, but the strongly-typed interface and lack of documentation around it (or I couldn't find it) made it difficult to develop. I spent a good amount of time trying to resolve type errors and had to go resort to `any` in some instances.

Besides that, the integrations and `npm` packages were very simple and intuitive. I thought I'd have to create my own search box and make API Calls myself with an `onChangeHandler()` but the algolia-supported Node Packages really made this entire process seamless and easy! Built-in Pagination was slick and it's very nice to see how the widgets interacted with one another.

Another feedback point I have is if I could wrap my own TextField in a `SearchBox` Provider and make my custom TextField component as a SearchBox. This might make it possible for customers to have a more consistent branding across their web-app.

I can easily see myself building very interesting use-cases for customers and help driving value for the org with a slick product such as this!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
