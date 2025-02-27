# Studya Design System Usage Guide

This guide explains how to use the Studya Design System from our private GitHub package repository.

## Setting up authentication

To use this package, you'll need to authenticate with GitHub Packages:

1. Create a GitHub personal access token with `read:packages` scope at [https://github.com/settings/tokens](https://github.com/settings/tokens)

2. Create or edit an `.npmrc` file in your project root:
   ```
   @your-org:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```
   
   Or set it globally:
   ```bash
   npm login --scope=@your-org --registry=https://npm.pkg.github.com/
   ```

## Installing the package

Once you have authentication set up, you can install the package:

```bash
npm install @your-org/studya-design-system
# or
yarn add @your-org/studya-design-system
```

## Using the components

```jsx
import { Button, Card, Input } from '@your-org/studya-design-system';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Example Form</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter information" />
      </Card.Content>
      <Card.Footer>
        <Button>Submit</Button>
      </Card.Footer>
    </Card>
  );
}
```

## CSS Setup

This component library uses Tailwind CSS. Make sure your project has Tailwind CSS configured properly. Add the library's path to your tailwind.config.js:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ...other content paths
    "./node_modules/@your-org/studya-design-system/**/*.{js,ts,jsx,tsx}"
  ],
  // ...rest of your config
}
``` 