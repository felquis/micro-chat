Welcome to micro-chat

An enterprise, micro chat application for all kinds of troubles and exities.

> This projects uses [Create Next App](https://github.com/segmentio/create-next-app).

## Folder Structure

After creating an app, it should look something like:

```
my-app/
  container/
  helpers/
  README.md
  package.json
  next.config.js
  components/
    head.js
    nav.js
  pages/
    index.js
  static/
    favicon.ico
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.


### `npm run export`

Export application to static html files, ready for production.

## Using CSS

[`styled-jsx`](https://github.com/zeit/styled-jsx) is bundled with next to provide support for isolated scoped CSS. The aim is to support "shadow CSS" resembling of Web Components, which unfortunately [do not support server-rendering and are JS-only](https://github.com/w3c/webcomponents/issues/71).

```jsx
export default () => (
  <div>
    Hello world
    <p>scoped!</p>
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>
)
```

Read more about [Next's CSS features](https://github.com/zeit/next.js#css).

## Adding Components

We recommend keeping React components in `./components` and they should look like:

NOTE: Always use CaptilizedLetter for component names.

### `./components/Simple.js`

```jsx
const Simple = () => (
  <div>Simple Component</div>
)

export default Simple // don't forget to export default!
```

### `./components/Complex.js`

```jsx
import { Component } from 'react'

class Complex extends Component {
  state = {
    text: 'World'
  }

  render () {
    const { text } = this.state
    return <div>Hello {text}</div>
  }
}

export default Complex // don't forget to export default!
```

## Fetching Data

You can fetch data in `pages` components using `getInitialProps` like this:

### `./pages/stars.js`

```jsx
const Page = (props) => <div>Next stars: {props.stars}</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  const stars = json.stargazers_count
  return { stars }
}

export default Page
```

For the initial page load, `getInitialProps` will execute on the server only. `getInitialProps` will only be executed on the client when navigating to a different route via the `Link` component or using the routing APIs.

_Note: `getInitialProps` can **not** be used in children components. Only in `pages`._

Read more about [fetching data and the component lifecycle](https://github.com/zeit/next.js#fetching-data-and-component-lifecycle)

## Deploy to Now

[now](https://zeit.co/now) offers a zero-configuration single-command deployment.

1. Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2. Run `now` from your project directory. You will see a **now.sh** URL in your output like this:

    ```
    > Ready! https://your-project-dirname-tpspyhtdtk.now.sh (copied to clipboard)
    ```

    Paste that URL into your browser when the build is complete, and you will see your deployed app.

You can find more details about [`now` here](https://zeit.co/now).

## Testing

Create a file named like `ComponentName.test.js`, and run `npm run test`

## Visual Regration Testing

**TODO**

We should use loki, I think it will be working just fine with the last patches.