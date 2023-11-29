/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://newsdata.io/api/1/:path*',
            },
        ]
    },
}

module.exports = nextConfig
