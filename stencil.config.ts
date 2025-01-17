import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components-stencil',
  outputTargets: [
    {
      type: 'www',
      dir: 'docs', // Gera os arquivos diretamente na pasta "docs"
      serviceWorker: null, // Desativa o service worker para evitar problemas de cache
      baseUrl: '/side-drawer-web-components/',
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
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
