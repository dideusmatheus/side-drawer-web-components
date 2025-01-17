import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: 'docs', // Gera os arquivos diretamente na pasta "docs"
      baseUrl: '/side-drawer-web-components/', // Caminho relativo ao repositório GitHub Pages
      serviceWorker: null, // Desativa o service worker para evitar problemas de cache
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
