// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/anato/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/putevod-1/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/anato/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/putevod-1/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/anato/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/putevod-1/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import mkcert from "file:///C:/Users/anato/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/putevod-1/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/anato/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/putevod-1/vite.config.ts";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    vue(),
    vueDevTools(),
    // Creates a custom SSL certificate valid for the local machine.
    // Using this plugin requires admin rights on the first dev-mode launch.
    // https://www.npmjs.com/package/vite-plugin-mkcert
    process.env.HTTPS ? mkcert() : void 0
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  publicDir: "./public",
  server: {
    // Разрешить доступ для localhost в dev режиме
    allowedHosts: [
      "localhost"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbmF0b1xcXFxPbmVEcml2ZVxcXFxcdTA0MjBcdTA0MzBcdTA0MzFcdTA0M0VcdTA0NDdcdTA0MzhcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDNFXHUwNDNCXFxcXHB1dGV2b2QtMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYW5hdG9cXFxcT25lRHJpdmVcXFxcXHUwNDIwXHUwNDMwXHUwNDMxXHUwNDNFXHUwNDQ3XHUwNDM4XHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQzRVx1MDQzQlxcXFxwdXRldm9kLTFcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FuYXRvL09uZURyaXZlLyVEMCVBMCVEMCVCMCVEMCVCMSVEMCVCRSVEMSU4NyVEMCVCOCVEMCVCOSUyMCVEMSU4MSVEMSU4MiVEMCVCRSVEMCVCQi9wdXRldm9kLTEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBta2NlcnQgZnJvbSAndml0ZS1wbHVnaW4tbWtjZXJ0J1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcvJyxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZURldlRvb2xzKCksXG4gICAgLy8gQ3JlYXRlcyBhIGN1c3RvbSBTU0wgY2VydGlmaWNhdGUgdmFsaWQgZm9yIHRoZSBsb2NhbCBtYWNoaW5lLlxuICAgIC8vIFVzaW5nIHRoaXMgcGx1Z2luIHJlcXVpcmVzIGFkbWluIHJpZ2h0cyBvbiB0aGUgZmlyc3QgZGV2LW1vZGUgbGF1bmNoLlxuICAgIC8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3ZpdGUtcGx1Z2luLW1rY2VydFxuICAgIHByb2Nlc3MuZW52LkhUVFBTID8gbWtjZXJ0KCkgOiB1bmRlZmluZWQsXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9LFxuICB9LFxuICBwdWJsaWNEaXI6ICcuL3B1YmxpYycsXG4gIHNlcnZlcjoge1xuICAgIC8vIFx1MDQyMFx1MDQzMFx1MDQzN1x1MDQ0MFx1MDQzNVx1MDQ0OFx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0MzRcdTA0M0VcdTA0NDFcdTA0NDJcdTA0NDNcdTA0M0YgXHUwNDM0XHUwNDNCXHUwNDRGIGxvY2FsaG9zdCBcdTA0MzIgZGV2IFx1MDQ0MFx1MDQzNVx1MDQzNlx1MDQzOFx1MDQzQ1x1MDQzNVxuICAgIGFsbG93ZWRIb3N0czogW1xuICAgICAgJ2xvY2FsaG9zdCdcbiAgICBdXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWSxTQUFTLGVBQWUsV0FBVztBQUVwYSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxZQUFZO0FBTDRMLElBQU0sMkNBQTJDO0FBUWhRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlaLFFBQVEsSUFBSSxRQUFRLE9BQU8sSUFBSTtBQUFBLEVBQ2pDO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBO0FBQUEsSUFFTixjQUFjO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
