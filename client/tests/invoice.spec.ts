import { test, expect } from "@playwright/test";

test.describe("Login then check invoices", () => {
    test("should login successfully with correct credentials", async ({
        page,
    }) => {
        await page.goto("http://localhost:5173");

        // Fill in email and passwrd
        await page.getByLabel("Email").fill("alice@altametrics.com");
        await page.getByLabel("Password").fill("securepassword123");

        await page.getByRole("button", { name: "Login" }).click();

        await expect(
            page.getByRole("button", { name: "Loading..." })
        ).toBeVisible();

        const rows = page.locator("table tbody tr");
        await expect(rows).toHaveCount(10);
    });
});
