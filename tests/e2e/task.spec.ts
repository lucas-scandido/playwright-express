import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker';

test('Deve cadastrar uma nova task', async ({ page }) => {

    await page.goto('/')

    const inputTaskName = page.locator('[id=newTask]')
    await inputTaskName.fill(faker.lorem.words(4))

    await page.click('css=button >> text=Create')

})