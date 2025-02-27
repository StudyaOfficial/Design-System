# Studya Design System

A modern component library built with Shadcn UI and Tailwind CSS.

## Installation

```bash
npm install @your-org/studya-design-system
# or
yarn add @your-org/studya-design-system
# or
pnpm add @your-org/studya-design-system
```

For detailed instructions on setting up authentication with GitHub Packages, see the [USAGE_GUIDE.md](./USAGE_GUIDE.md).

## Requirements

This package requires the following peer dependencies:

```json
{
  "react": "^18",
  "react-dom": "^18",
  "tailwindcss": "^3.3.0"
}
```

## Publishing

To publish a new version to GitHub Packages:

1. Make sure you have a GitHub token with `write:packages` scope:
   ```
   export GITHUB_TOKEN=your_github_token
   ```

2. Update the version in package.json
   ```
   npm version patch  # or minor or major
   ```

3. Build and publish:
   ```
   npm run build:package
   npm publish
   ```

## Usage

First, make sure you have Tailwind CSS set up in your project. Then you can import components from the package:

```jsx
import { Button, Input, Card } from '@your-org/studya-design-system';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Form Example</Card.Title>
        <Card.Description>Fill out this form</Card.Description>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter your name" />
      </Card.Content>
      <Card.Footer>
        <Button>Submit</Button>
      </Card.Footer>
    </Card>
  );
}
```

## Available Components

The Studya Design System includes the following components:

- Accordion
- Alert
- Alert Dialog
- Aspect Ratio
- Avatar
- Badge
- Button
- Calendar
- Card
- Checkbox
- Collapsible
- Command
- Context Menu
- Dialog
- Dropdown Menu
- Form
- Hover Card
- Input
- Label
- Menubar
- Navigation Menu
- Popover
- Progress
- Radio Group
- Scroll Area
- Select
- Separator
- Sheet
- Skeleton
- Slider
- Switch
- Table
- Tabs
- Textarea
- Toast
- Toggle
- Toggle Group
- Tooltip

## Development

To run the component library in development mode with Storybook:

```bash
npm run storybook
```

To build the component library for production:

```bash
npm run build:package
```

## License

MIT

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Important Note for Apple Silicon Users
if you're using apple sillicon, you need to run the foloowing commands after the yarn install
```
brew install vips

npm rebuild --verbose sharp
```
First, run the development server:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install 
#02
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

