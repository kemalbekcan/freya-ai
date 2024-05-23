/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config, { isServer }) {
    // MP3 dosyalarını işlemek için bir yükleme kuralı ekleyin
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/_next/static/sounds/", // MP3 dosyalarının public yolunu belirtin
            outputPath: "static/sounds/", // MP3 dosyalarının çıktı yolu
          },
        },
      ],
    });

    // Diğer yapılandırma ayarları...

    return config;
  },
};
export default nextConfig;
