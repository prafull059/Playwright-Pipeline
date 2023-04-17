import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://www.quiklyz.com/")
    await page.screenshot({ path: './screenshot.png', fullPage: true });
})