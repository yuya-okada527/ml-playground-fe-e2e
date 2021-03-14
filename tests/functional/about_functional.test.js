const { it, describe, beforeEach, expect } = require("@playwright/test");

require("dotenv").config();

const BASE_PAGE = process.env.TARGET_URL;

describe("Aboutページ 機能テスト", () => {
  describe("Aboutページへの画面遷移", () => {
    it("Topページから遷移", async ({ page }) => {
      await page.goto(BASE_PAGE);
      await page.click("text=About");
      expect(await page.title()).toBe("About Site");
    });
    it("URLで直接遷移", async ({ page }) => {
      await page.goto(`${BASE_PAGE}/about`);
      expect(await page.title()).toBe("About Site");
    });
  });

  describe("Aboutページからの画面遷移", () => {
    beforeEach(async ({ page }) => {
      await page.goto(`${BASE_PAGE}/about`);
    });
    it("Homeボタンで遷移", async ({ page }) => {
      await page.click("text=Home");
      expect(await page.title()).toBe("ML Playground");
    });
    it("映画推薦リンクで遷移", async ({ page }) => {
      await page.click("text=映画推薦");
      expect(await page.title()).toBe("ML Playground");
    });
  });
});
