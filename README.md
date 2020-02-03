# React.js - typescript - rollup - npm (with Next.js testing)

This repo is a boilerplate/template for [React.js](https://reactjs.org/ "React.js") component library, using [typescript](https://www.typescriptlang.org/ "typescript") (eg. \*.tsx files), [rollup.js](https://rollupjs.org/guide/en/ "rollup") for builds, ready for deploy on [npm](https://www.npmjs.com/ "npm"), featuring [Jest](https://jestjs.io/ "Jest") for testing as well as [Next.js](https://nextjs.org/ "Next.js") and [Storybook](https://storybook.js.org/ "Storybook") for developing.

#### Proof of work - install this template dependency as [npm package](https://www.npmjs.com/package/react-typescript-rollup-npm "npm") and try importing _MyComponent_

```
$ yarn add react-typescript-rollup-npm
```

and then

```javascript
import React from "react";
import { MyComponent } from "react-typescript-rollup-npm";

export default () => <MyComponent />;
```

> ## Note
>
> I recommend using [yarn](https://yarnpkg.com/ "Yarn") but you can change any command to npm for eg.
>
> ```
> $ npm i --save react-typescript-rollup-npm
> ```
>
> #

# Setup

## Install dependencies

```
$ yarn
```

## Building

```
$ yarn build
```

## Developing (using Next.js)

---

On index page (eg. [localhost:3000/](http://localhost:3000/)) there is a development version of your component (from /src), which will hot-reload while editting the component in /src, while on /build page (eg. [localhost:3000/build](http://localhost:3000/build)) there is a builded version preview and finally on /production page (eg. [localhost:3000/production](http://localhost:3000/production)) there is a production version of your component (from package on npm)

To change the page names, edit them or add new ones You just need to play around with files in /src/pages.

For further customization check out [Next.js](https://nextjs.org/ "Next.js")!

```
$ yarn dev
```

### Running tests

```
$ yarn test
```

### Running Storybook

```
$ yarn storybook
```

## Deploying on npm

---

First (after you sing up) log in to your npm account in console

```
$ npm login
```

If the name you specified isn't taken You can easily publish your package with

```
$ npm publish
```

### But, if it is taken there are some options

- #### change the name xD
  You can check name availability by running

```
$ npm search desired-package-name
```

- #### change scope ( @username/package-name )
  Either change name in package.json to @username/package-name

or

```
$ npm init --scope=username
```

Bear in mind that using scope requires You to use

```
$ npm publish --access public
```

## Updating npm package

---

I highly recommend using [np](https://github.com/sindresorhus/np)

```
$ yarn global add np
```

Run

```
$ np
```

And then just follow the instructions

#### Note that [np](https://github.com/sindresorhus/np) is running yarn test (npm run test) command by default, If You don't use tests in Your project, You might have to edit that command to something like that:

/package.json

```json
"scripts": {
  "test": "echo \"No test specified\""
},
```
