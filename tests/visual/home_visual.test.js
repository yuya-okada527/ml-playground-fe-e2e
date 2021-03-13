const { it, describe, expect } = require("@playwright/test");

require("dotenv").config();

const BASE_PAGE = process.env.TARGET_URL;

describe("Homeページ ビジュアルテスト", () => {
  it("スクリーンショット", async ({ page, browserName }) => {
    await page.goto(`${BASE_PAGE}`);
    const screenshot = await page.screenshot({
      fullPage: true,
    });
    expect(screenshot).toMatchSnapshot(`home-${browserName}.png`, {
      threshold: 0.2,
    });
  });
});
