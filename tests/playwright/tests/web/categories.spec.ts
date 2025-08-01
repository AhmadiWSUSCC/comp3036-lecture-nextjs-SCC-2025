// import { seed } from "@repo/db/seed";
import { expect, test } from "./fixtures";

// test.beforeAll(async () => {
//   await seed();
// });

test.describe("Categories Page", () => {
  test(
    "Renders the posts for a category",
    {
      tag: "@pages",
    },
    async ({ page }) => {
      await page.goto("/category/react");

      await expect(await page.getByText("Better front ends with Fatboy Slim")).toBeVisible();
      await expect(await page.getByText("No front end framework is the best")).toBeVisible();
      await expect(await page.getByText("Visual Basic is the future")).not.toBeVisible();
    },
  );
});
