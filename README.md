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

## Props

### `title` (optional)
- **Type:** `string`
- **Description:** The title of the page. If provided, it will be appended with the site name.

### `description` (optional)
- **Type:** `string`
- **Description:** The description of the page.

### `image` (optional)
- **Type:** `string`
- **Description:** The URL of the image to be used in the Open Graph and Twitter meta tags. If not provided, a default image URL will be used.

### `images` (optional)
- **Type:** `string[]`
- **Description:** An array of image URLs to be used in the Open Graph meta tags.

### `ogType` (optional)
- **Type:** `string`
- **Default:** `'website'`
- **Description:** The type of the Open Graph object (e.g., `article`, `website`).

### `twitterCard` (optional)
- **Type:** `string`
- **Default:** `'summary'`
- **Description:** The type of the Twitter card (e.g., `summary`, `summary_large_image`).

### `url` (optional)
- **Type:** `string`
- **Description:** The URL of the page. If not provided, the current URL will be used.

### `siteName` (optional)
- **Type:** `string`
- **Default:** `process.env.NEXT_PUBLIC_SITE_NAME`
- **Description:** The name of the site.