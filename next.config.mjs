/** @type {import('next').NextConfig} */
const hiddenPages = ["/partner", "/services", "/trusted-by", "/get-started", "/about", "/about/:path*"]

const nextConfig = {
  async redirects() {
    return hiddenPages.map((source) => ({ source, destination: "/", permanent: false }))
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
