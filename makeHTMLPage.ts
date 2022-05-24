import { serve } from "https://deno.land/std@0.137.0/http/server.ts";
  
interface HTMLPageOptions {
  body?: string;
  head?: string;
  title: string;
}

export function makeHTMLPage({ body }: HTMLPageOptions) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body>
    ${body}
  </body>
</html>`;
