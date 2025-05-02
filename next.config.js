/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.doodcdn.io",
            },
            {
                hostname: "placehold.co",
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

module.exports = nextConfig;
