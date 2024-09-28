// src/types/global.d.ts
declare global {
    interface Window {
      MathJax: any; // You can use a more specific type if you know the structure of MathJax
    }
  }
  
  export {}; // This is necessary to make it a module
  