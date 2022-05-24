import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";

import makeHTMLPage from "./makeHTMLPage.ts";
import fixtureConfig from "./fixtureConfig.ts";
Deno.test("makeHTMLPage", async (t) => {
  await t.step("result matches fixture", async () => {
    const result = makeHTMLPage(fixtureConfig);
    const snapshot = await Deno.readTextFileSync("html_page.html");
    assertEquals(result, snapshot);
  });
});
