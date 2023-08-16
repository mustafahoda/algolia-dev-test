# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Algolia Interview Findings

Technologies Used:

- React for FrontEnd JS Library
- Typescript for a better developer experience during build-time
- Ant Design for quick and beautiful React Components to make the App visually appealing
- Algolia to quickly be able to search on indexed data
- Google Maps API to show the geolocation of the airport

The hopes of this project was to quickly demonstrate my capabalities as a Solutions Engineer and how I'm able to prototype and build a Proof of Concept by reading Algolia Documents. As far as my experience with Algolia went, it was pretty straightforward! The documentation is thorough and complete. In-dashboard was experience and the hints guided me along with the way especially as a first time user.

I also wanted to see the location, so I used the Google Maps Embed into each Hit that was returned. I though it made it more visually appealing 😍.

Feedback for the Algolia Team:
The one thing that made setup really difficult for me was lack of Typescript Dcoumentation. I chose to use Typescript to demonstrate my capabilities, but the strongly-typed interface and lack of documentation around it (or I couldn't find it) made it difficult to develop. I spent a good amount of time trying to resolve type errors and had to go resort to `any` in some instances.

Besides that, the integrations and `npm` packages were very simple and intuitive. I thought I'd have to create my own search box and make API Calls myself with an `onChangeHandler()` but the algolia-supported Node Packages really made this entire process seamless and easy! Built-in Pagination was slick and it's very nice to see how the widgets interacted with one another.

Another feedback point I have is if I could wrap my own TextField in a `SearchBox` Provider and make my custom TextField component as a SearchBox. This might make it possible for customers to have a more consistent branding across their web-app.

I can easily see myself building very interesting use-cases for customers and help driving value for the org with a slick product such as this!

## Algolia Interview Question

1. Question 1: Hello,

   I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

   Records

   Indexing

   I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

   Cheers, George

   ***

   Response 1:

   Hi George,

   Happy to help here and so glad you're looking into Algolia.

   **Records**: Records are a collection data (record) that is stored in the Search Engine's Database which can be reprsented in multiple formats. Each record typically represents a unit of data such as document. If we' looking in the context of JSON Data, each JSON entry will be a record and the record will contain key, value pairs that make up the structure of the record.

   Here's a quick example:

   ```json
   {
     "name": "Test Person",
     "age": 54,
     "location": "New York, NY"
   }
   ```

   You can find more datasets here: https://github.com/algolia/datasets

   **Indexing**: Indexing is simply the process of providing the Search Database the data that needs to be searched on. Algolia can index though either API or the UI Friendly Dashboard.

   You can find more information on how to index with Algolia here: https://www.algolia.com/doc/guides/indexing/indexing-overview/#overview

   **Custom Ranking**: Algolia has a built-in ranking mechanism that works very well. They accomodate for relevance and typos. However, we have seen a lot of our enterprise customers want to expand beyond these standard capabilities and determining how to rank results themselves. Some prime examples include returning the most-popular items in a storefront and an attribute that will help you yeild such a result will be `total_sales` or `total_units_sold`.

   More information here: https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/#custom-ranking

   Please reach out should you have further questions.

   Best,

   Mustafa Hoda

1. Question 2: Hello,

   Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

   Regards, Matt

   ***

   Response 2:
   Hi Matt,

   Sorry to hear that you're not a fan of our customer dashboard. We constantly strive to make the developer and admin experience of Algolia seamless. I've filed an improvement into our Internal Feature Request and will bring it up during the next Product <> Solution Teams Sync.

   I believe the reason Product went in this direction was because we consider clearing and deleting indexes an operation a "dangerous" operation and so we want to inform and really make the user aware of the operation they are about to perform.

   Nevertheless, if you're designing and iterating, you can easily delete and clear indexes with our APIs and have a script do this for easily without any friction. [More info here](https://www.algolia.com/doc/api-reference/api-methods/delete-index/)

   Please let me know shoud you have any questions.

1. Question 3: Hi,

   I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

   Regards, Leo

   ***

   Hi Leo,

   Nice to meet you!

   Algolia is super-simple to get started with and your React Components make it super-seamless to get started. Once you have indexed and configured your data, you can easily build UI Component that will allow you get started in as little at 10 minutes!

   [Check out the docs here for more information](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)

   If you have any questions getting started, please do not hesitate to reach out!

   Best,

   Mustafa Hoda

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
