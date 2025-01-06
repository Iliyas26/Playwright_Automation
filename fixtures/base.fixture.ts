import { test as base, Page, BrowserContext } from '@playwright/test';
import LoginPage  from '../pages/login.page';
import ProductPage from '../pages/product.page';

// Define the custom fixture type
export interface MyFixture {
    context: BrowserContext;
    page: Page;
    loginPage: LoginPage;
    productPage: ProductPage;
}

// Create and export the custom test fixture
export const test = base.extend<MyFixture>({
 
    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
    },
    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    }
});

// Export expect for assertions
export { expect, Locator, Page } from '@playwright/test'; 

export function step(stepName?: string) {
    return function decorator(
        target: Function, 
        context: ClassMemberDecoratorContext
    ) {
        return function replacementMethod(...args: any) {
            const name =`${stepName || context.name as string}`;
            return test.step(name, async() =>{
                return await target.call(this, ...args);
            });
        };
    };
}