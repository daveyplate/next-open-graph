# @daveyplate/next-open-graph

## Description

This package provides a simple way to add Open Graph meta tags to your Next.js application.

## Installation

```bash
npm install @daveyplate/next-open-graph
```

## Usage

```jsx
import { OpenGraph } from '@daveyplate/next-open-graph'

export default function MyPage() {
  return (
    <>
        <OpenGraph
            title="My Page"
            description="This is my page"
            image="https://example.com/image.jpg"
            ogType="article"
            twitterCard="summary"
            url="https://example.com/my-page"
            siteName="My Awesome Site"
        />
    </>
  )
}
```