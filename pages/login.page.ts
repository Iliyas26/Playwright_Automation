import { expect, Locator, Page, step } from '../fixtures/base.fixture';

export default class LoginPage {
    public readonly page: Page;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly homeLink: Locator;
    private readonly myAccountDropdown: Locator;
    private readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByPlaceholder('E-Mail Address');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.myAccountDropdown = page.locator("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
        this.loginLink = page.getByRole('link', { name: 'Login' });
    }

    @step('Perform Login')
    async login(email: string, password: string): Promise<void> {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/');
        await this.myAccountDropdown.hover();
        await this.loginLink.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    @step('Navigate to Home')
    async navigateToHome(): Promise<void> {
        await this.homeLink.click();
    }
}