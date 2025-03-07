// /* eslint-disable boundaries/no-unknown-files */
import { AngularAppEngine, createRequestHandler } from "@angular/ssr";
import { getContext } from "@netlify/angular-runtime/context";

const angularAppEngine = new AngularAppEngine();


export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();


  // Example API endpoints can be defined here.
  // Uncomment and define endpoints as necessary.
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }


  const result = await angularAppEngine.handle(request, context);
  return result || new Response("Not found", { status: 404 });
}


export const reqHandler = createRequestHandler(netlifyAppEngineHandler);


// import {
//   AngularNodeAppEngine,
//   createNodeRequestHandler,
//   isMainModule,
//   writeResponseToNodeResponse,
// } from '@angular/ssr/node';
// import express from 'express';
// import { dirname, resolve } from 'node:path';
// import { fileURLToPath } from 'node:url';

// const serverDistFolder = dirname(fileURLToPath(import.meta.url));
// const browserDistFolder = resolve(serverDistFolder, '../browser');

// const app = express();
// const angularApp = new AngularNodeAppEngine();

// app.use(
//   express.static(browserDistFolder, {
//     maxAge: '1y',
//     index: false,
//     redirect: false,
//   }),
// );

// app.use('/**', (req, res, next) => {
//   angularApp
//     .handle(req)
//     .then((response) =>
//       response ? writeResponseToNodeResponse(response, res) : next(),
//     )
//     .catch(next);
// });

// if (isMainModule(import.meta.url)) {
//   const port = process.env['PORT'] || 4000;
//   app.listen(port, () => {
//     console.log(`Node Express server listening on http://localhost:${port}`);
//   });
// }

// export const reqHandler = createNodeRequestHandler(app);
