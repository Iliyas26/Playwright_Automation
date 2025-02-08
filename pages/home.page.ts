import { expect, Locator, Page, step } from '../fixtures/base.fixture';
import CommonHelper from '../utils/common.helper';

export default class HomePage {
    public readonly page: Page;
    private readonly categoryDropDown: Locator;
    private readonly commonHelper: CommonHelper;

    constructor(page: Page) {
        this.page = page;
        this.commonHelper = new CommonHelper(page);
        this.categoryDropDown = page.locator("//a[@class='dropdown-item']");
    }

    @step('Select Product Category')
    async selectCategory(): Promise<void> {
        await this.commonHelper.selectDropdownByText(this.categoryDropDown, 'Cameras');
    }
}