/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
        SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
        SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
        BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN
    },
    images: {
        unoptimized: true,
        domains: [
            "public.blob.vercel-storage.com",
            "i.scdn.co",
            "9cyzy13rz9rrcjlv.public.blob.vercel-storage.com",
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "public.blob.vercel-storage.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "i.scdn.co",
                port: "",
            },
            {
                protocol: "https",
                hostname: "9cyzy13rz9rrcjlv.public.blob.vercel-storage.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
