import {defineConfig} from "vite";
import solid from "@solidjs/vite-plugin";

export default defineConfig({
    plugins: [solid()],
    server: {
        host: "0.0.0.0",
        port: 5173,
    },
});
