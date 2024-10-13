/** @type {import('@remix-run/dev').AppConfig} */
const config = {
  appDirectory: "app", // Your app directory
  assetsBuildDirectory: "public/build", // Where to store static assets
  serverBuildPath: "build/index.js", // Path for server build
  publicPath: "/exec-tutorial-test/build/", // Public path for serving assets
  devServerPort: 8002,
  // Other optional configurations
};

export default config;
