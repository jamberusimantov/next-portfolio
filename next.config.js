/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        // Will only be available on the server side
        db: process.env.db,
        email: process.env.email,
        transporterUser: process.env.transporterUser,
        transporterPassword: process.env.transporterPassword,
        transporterHost: process.env.transporterHost,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
    },
}

module.exports = nextConfig