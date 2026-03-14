// Lottie animation files are loaded as data URLs by the esbuild `dataurl` loader.
declare module "*.lottie" {
  const src: string;
  export default src;
}
