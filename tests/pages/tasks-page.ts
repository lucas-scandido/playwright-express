import { Page, expect, Locator } from '@playwright/test'
import {faker} from '@faker-js/faker'

export class TasksPage {
    readonly page: Page
    readonly inputTaskName: Locator
    readonly btnInputTask: Locator

    constructor(page: Page) {
        this.page = page
        this.inputTaskName = page.locator('input[class*=InputNewTask]')
        this.btnInputTask = page.getByRole('button', { name: 'Create' })
    }

    async createTask(){
        expect(this.inputTaskName).toBeVisible()
        await this.inputTaskName.fill(faker.lorem.word())

        await this.btnInputTask.click()
    }
}
