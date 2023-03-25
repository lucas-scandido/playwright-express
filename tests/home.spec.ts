import { test, expect } from '@playwright/test'

test('Aplicação deve estar online', async ({ page }) => {

    await page.goto('localhost:3000')
    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L')
})