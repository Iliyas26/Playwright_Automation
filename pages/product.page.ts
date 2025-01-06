import { expect, Locator, Page, step } from '../fixtures/base.fixture';

export default class ProductPage {
    public readonly page: Page;
    private readonly categoryButton: Locator;
    private readonly camerasLink: Locator;
    private readonly blackColorFilter: Locator;
    private readonly inStockFilter: Locator;
    private readonly addToWishlistButton: Locator;
    private readonly closeButton: Locator;
    private readonly hpLink: Locator;
    private readonly secondProductWishlist: Locator;
    private readonly wishListLink: Locator;
    private readonly wishListSecondLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.categoryButton = page.getByRole('button', { name: 'Shop by Category' });
        this.camerasLink = page.getByRole('link', { name: 'Cameras', exact: true });
        this.blackColorFilter = page.locator('#mz-filter-panel-0-4').getByRole('img', { name: 'Black' });
        this.inStockFilter = page.locator('#mz-filter-panel-0-5').getByText('In stock');
        this.addToWishlistButton = page.getByRole('button', { name: '' }).nth(1);
        this.closeButton = page.getByLabel('Close', { exact: true });
        this.hpLink = page.getByRole('link', { name: 'HP' });
        this.secondProductWishlist = page.locator('div:nth-child(2) > .product-thumb > .product-thumb-top > .product-action > button:nth-child(2)');
        this.wishListLink = page.getByRole('link', { name: 'Wish List (4) ' });
        this.wishListSecondLink = page.getByRole('link', { name: '' }).nth(1);
    }

    @step('Navigate to Cameras Category')
    async navigateToCategory(): Promise<void> {
        await this.categoryButton.click();
        await this.camerasLink.click();
    }

    @step('Apply Product Filters')
    async applyFilters(): Promise<void> {
        await this.blackColorFilter.click();
        await this.inStockFilter.click();
    }

    @step('Add Products to Wishlist')
    async addToWishlist(): Promise<void> {
        await this.addToWishlistButton.click();
        await this.closeButton.click();
        await this.hpLink.click();
        await this.secondProductWishlist.click();
    }

    @step('View Wishlist')
    async viewWishlist(): Promise<void> {
        await this.wishListLink.click();
        await this.wishListSecondLink.click();
    }
} 