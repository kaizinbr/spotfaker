/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['public.blob.vercel-storage.com', 'i.scdn.co', '9cyzy13rz9rrcjlv.public.blob.vercel-storage.com'],
        remotePatterns: [
            'https://public.blob.vercel-storage.com/*',
            'https://i.scdn.co/*',
            'https://9cyzy13rz9rrcjlv.public.blob.vercel-storage.com/*',
        ],
    },
}

module.exports = nextConfig
