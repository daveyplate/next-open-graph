import Head from 'next/head'
import { useRouter } from 'next/router'

// Define the props interface
interface OpenGraphProps {
    title?: string
    description?: string
    image?: string
    images?: string[]
    ogType?: string
    twitterCard?: string
    url?: string
    siteName?: string
}

// Update the OpenGraph component with TypeScript
export function OpenGraph({
    title,
    description,
    image,
    images = [],
    ogType = 'website',
    twitterCard = 'summary',
    url,
    siteName = process.env.NEXT_PUBLIC_SITE_NAME,
}: OpenGraphProps) {
    const router = useRouter()

    // Set default values if not provided
    image = image || `${process.env.NEXT_PUBLIC_BASE_URL}/apple-touch-icon.png`
    title = title ? `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}` : process.env.NEXT_PUBLIC_SITE_NAME
    url = url || `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`

    return (
        <Head>
            {description && <meta key="meta-description" name="description" content={description} />}

            {/* Open Graph / Facebook */}
            {ogType && <meta key="og:type" property="og:type" content={ogType} />}
            {image && <meta key="og:image:0" property="og:image" content={image} />}
            {images.map((img, index) => (
                <meta key={`og:image:${index}`} property="og:image" content={img} />
            ))}
            {siteName && <meta key="og:site_name" property="og:site_name" content={siteName} />}
            {title && <meta key="og:title" property="og:title" content={title} />}
            {description && <meta key="og:description" property="og:description" content={description} />}
            <meta key="og:url" property="og:url" content={url} />

            {/* Twitter */}
            {image && <meta key="twitter:image" property="twitter:image" content={image} />}
            {twitterCard && <meta key="twitter:card" property="twitter:card" content={twitterCard} />}
            {title && <meta key="twitter:title" property="twitter:title" content={title} />}
            {description && <meta key="twitter:description" property="twitter:description" content={description} />}
        </Head>
    )
}