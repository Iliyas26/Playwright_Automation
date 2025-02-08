import { Locator, Page } from '../fixtures/base.fixture';

export default class CommonHelper {
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Handle dropdown selection by text
     */
    public async selectDropdownByText(dropdown: Locator, optionText: string): Promise<void> {
        await dropdown.click();
        await this.page.getByText(optionText, { exact: true }).click();
    }

    /**
     * Handle dropdown selection by index
     */
    async selectDropdownByIndex(dropdown: Locator, index: number): Promise<void> {
        await dropdown.click();
        const options = await dropdown.locator('option').all();
        if (index < 0 || index >= options.length) {
            throw new Error(`Index ${index} is out of bounds`);
        }
        await options[index].click();
    }

    /**
     * Perform drag and drop operation
     */
    async dragAndDrop(source: Locator, target: Locator): Promise<void> {
        const sourceBox = await source.boundingBox();
        const targetBox = await target.boundingBox();
        
        if (sourceBox && targetBox) {
            await source.hover();
            await this.page.mouse.down();
            await this.page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);
            await this.page.mouse.up();
        }
    }

    /**
     * Format date for input fields
     */
    formatDate(date: Date = new Date(), format: string = 'yyyy-MM-dd'): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        return format
            .replace('yyyy', year.toString())
            .replace('MM', month)
            .replace('dd', day);
    }

    /**
     * Wait for element to be stable (no animations/movements)
     */
    async waitForElementStable(element: Locator, timeout: number = 5000): Promise<void> {
        const startTime = Date.now();
        let lastRect = await element.boundingBox();

        while (Date.now() - startTime < timeout) {
            await this.page.waitForTimeout(100);
            const currentRect = await element.boundingBox();
            
            if (JSON.stringify(lastRect) === JSON.stringify(currentRect)) {
                return;
            }
            lastRect = currentRect;
        }
        throw new Error('Element position did not stabilize');
    }

    /**
     * Handle file upload
     */
    async uploadFile(uploadButton: Locator, filePath: string): Promise<void> {
        await uploadButton.setInputFiles(filePath);
    }

    /**
     * Handle multiple file upload
     */
    async uploadMultipleFiles(uploadButton: Locator, filePaths: string[]): Promise<void> {
        await uploadButton.setInputFiles(filePaths);
    }

    /**
     * Scroll element into view and wait for it to be stable
     */
    async scrollIntoViewAndWait(element: Locator): Promise<void> {
        await element.scrollIntoViewIfNeeded();
        await this.waitForElementStable(element);
    }

    /**
     * Handle shadow DOM elements
     */
    async getShadowElement(hostLocator: Locator, shadowSelector: string): Promise<Locator> {
        const handle = await hostLocator.evaluateHandle(
            (el, selector) => el.shadowRoot?.querySelector(selector),
            shadowSelector
        );
        const elementHandle = await handle.asElement();
        if (!elementHandle) {
            throw new Error('Could not find element in shadow DOM');
        }
        return this.page.locator(`>> ${elementHandle}`);
    }
} 