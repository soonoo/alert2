// Reexport the native module. On web, it will be resolved to Alert2Module.web.ts
// and on native platforms to Alert2Module.ts
export { default } from './Alert2Module';
export { default as Alert2View } from './Alert2View';
export * from  './Alert2.types';
