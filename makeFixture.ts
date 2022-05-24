import makeHTMLPage from "./makeHTMLPage.ts";
import fixtureConfig from "./fixtureConfig.ts";

const html = makeHTMLPage(fixtureConfig);

Deno.writeTextFileSync("html_page.html", html);
