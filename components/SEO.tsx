import React, { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title = 'AssetTrack TI - Gestão Industrial Inteligente',
    description = 'Plataforma líder para rastreamento de ativos, autenticação QR e inspeção visual com IA. Otimize sua gestão industrial com AssetTrack TI.',
    keywords = 'gestão de ativos, controle de estoque, QR code, indústria 4.0, rastreamento, autenticação, manutenção preventiva',
    image = '/og-image.jpg',
    url = 'https://assettrack.ti',
}) => {

    useEffect(() => {
        // Update Title
        document.title = title;

        // Helper to update or create meta tags
        const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Helper to update or create link tags
        const updateLink = (rel: string, href: string) => {
            let element = document.querySelector(`link[rel="${rel}"]`);
            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }
            element.setAttribute('href', href);
        };

        // Update Standard Meta Tags
        updateMeta('description', description);
        updateMeta('keywords', keywords);

        // Update Open Graph
        updateMeta('og:title', title, 'property');
        updateMeta('og:description', description, 'property');
        updateMeta('og:image', image, 'property');
        updateMeta('og:url', url, 'property');
        updateMeta('og:type', 'website', 'property');

        // Update Canonical
        updateLink('canonical', url);

        // Update JSON-LD
        const schemaMarkup = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AssetTrack TI",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "BRL"
            },
            "description": description,
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "120"
            },
            "publisher": {
                "@type": "Organization",
                "name": "AssetTrack TI",
                "url": url
            }
        };

        let script = document.querySelector('script[type="application/ld+json"]');
        if (!script) {
            script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }
        script.innerHTML = JSON.stringify(schemaMarkup);

    }, [title, description, keywords, image, url]);

    return null; // This component handles side-effects only
};
