const { it, describe, expect } = require("@playwright/test");

require("dotenv").config();

const BASE_PAGE = process.env.TARGET_URL;

describe("Aboutページ ビジュアルテスト", () => {
  it("スクリーンショット", async ({ page, browserName }) => {
    await page.goto(`${BASE_PAGE}/about`);
    const screenshot = await page.screenshot({
      fullPage: true,
    });
    expect(screenshot).toMatchSnapshot(`about-${browserName}.png`, {
      threshold: 0.2,
    });
  });
});
