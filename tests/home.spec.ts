import { test, expect } from '@playwright/test'

test.describe('Application Status', () => {

  test('App should be online', async ({ page }) => {
    await page.goto('/')
  
    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L')
  })
})
