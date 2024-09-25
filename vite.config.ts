import { sentryVitePlugin } from "@sentry/vite-plugin";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }), tsconfigPaths(), sentryVitePlugin({
      debug: true,
      org: "haslab",
      project: "has-course-client",
      url: "https://sentry.io/",
      authToken: process.env.SENTRY_AUTH_TOKEN, // Menggunakan process.env untuk menghindari error
    })],
    build: {
      sourcemap: true
    }
  }
})