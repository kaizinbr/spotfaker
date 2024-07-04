/** @type {import('next').NextConfig} */
const nextConfig = {
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
