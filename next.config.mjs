/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{ 
        domains:["images.kikocosmetics.com", "res.cloudinary.com"]
        },
        env:{
            API_URL : process.env.API_URL,
            SECRET : process.env.SECRET,
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
            STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
            NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
            GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
            GITHUB_SECRET_ID: process.env.GITHUB_SECRET_ID,
            GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
            GOOGLE_SECRET_ID: process.env.GOOGLE_SECRET_ID
            }
};

export default nextConfig;
