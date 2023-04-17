import {test,expect} from "@playwright/test"
 
test("U Verification", async ({page}) =>{
    await page.goto("https://uatcontainer.quiklyz.com")
    await page.locator('#mat-dialog-0').getByText('Mumbai').click();
    await page.getByRole('button', { name: 'Login ' }).click();
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    expect(await page.isDisabled("//*[@id='mat-tab-content-2-1']/div/div[2]/div[1]/div/div[1]/div/div/div/div/fg-client-login-container/div/form/div[2]/div/button")).toBe(true);
})

test("UI Verification", async ({page}) =>{
    await page.goto("https://tutorialsninja.com/demo/")
    await page.click('//*[@id="top-links"]/ul/li[2]')
    await page.click('//*[@id="top-links"]/ul/li[2]/ul/li[2]/a')
    const a = await page.isEnabled('//*[@id="content"]/div/div[2]/div/form/input');
console.log(" is enable "+a);
expect(a).toBe(true)

})

test("Checked", async ({page}) =>{
    await page.goto("https://tutorialsninja.com/demo/")
    await page.click('//*[@id="top-links"]/ul/li[2]')

    await page.click('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a')
    expect(await page.isChecked('//*[@id="content"]/form/fieldset[3]/div/div/label[2]/input')).toBe(true)
    await page.waitForTimeout(5000)
})

test("Editable", async ({page}) =>{
    await page.goto("https://tutorialsninja.com/demo/")
    await page.click('//*[@id="top-links"]/ul/li[2]')
    await page.click('//*[@id="top-links"]/ul/li[2]/ul/li[1]/a')
    expect(await page.isEditable('//*[@id="input-firstname"]')).toBe(true)
    await page.waitForTimeout(5000)
})