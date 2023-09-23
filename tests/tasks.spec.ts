import { test, expect } from '@playwright/test'
import { TasksPage } from './pages/tasks-page'

let newTask: TasksPage

test.beforeEach(({page}) => {
    newTask = new TasksPage(page)
  })
  
test.describe('Create new task', () => {

    test('Should create a new task', async ({ page }) => {
      await page.goto('/', { waitUntil: "networkidle" })
  
      await newTask.createTask()
    })
  })
  