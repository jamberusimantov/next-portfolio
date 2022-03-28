/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        // Will only be available on the server side
        db: process.env.db,
        emailUser: process.env.emailUser,
        emailPass: process.env.emailPass,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
    },
}

module.exports = nextConfig