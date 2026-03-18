// Lottie animation files are loaded as data URLs by the esbuild `dataurl` loader.
declare module "*.lottie" {
  const src: string;
  export default src;
}

// Minimal process.env typing for NODE_ENV checks in browser-targeted code.
// Full @types/node is intentionally excluded to avoid polluting the DOM lib environment.
declare const process: { env: { NODE_ENV?: string } };
