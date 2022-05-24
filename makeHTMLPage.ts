interface HTMLPageOptions {
  body?: string;
  head?: string;
  title: string;
}

export function makeHTMLPage({ body, title, head }: HTMLPageOptions) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${head}
  </head>
  <body>
    ${body}
  </body>
</html>`;
}
