import { test } from '../fixtures/base.fixture';
import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';
import HomePage from '../pages/home.page';

test.describe('E-commerce Test Suite', () => {
    let loginPage: LoginPage;
    let productPage: ProductPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        homePage = new HomePage(page);
    });

    test('should complete e-commerce workflow', async ({ page }) => {
            // Login
            await loginPage.login('koushik350@gmail.com', 'Pass123$');
            await loginPage.navigateToHome();

          //  await homePage.selectCategory();

            // Product navigation and wishlist
            await productPage.navigateToCategory();
            await productPage.applyFilters();
            await productPage.addToWishlist();
            await productPage.viewWishlist();
    });
}); 