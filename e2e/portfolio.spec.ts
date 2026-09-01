import { test, expect } from "@playwright/test";

test.describe("Jerry Melvin J Portfolio - Comprehensive E2E Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("1. Page renders primary sections, branding, and metadata", async ({ page }) => {
    // Check page title and SEO
    await expect(page).toHaveTitle(/Jerry Melvin J | Senior Product Designer & UI\/UX Specialist/);

    // Verify all major section IDs exist in DOM
    await expect(page.locator("#hero")).toBeVisible();
    await expect(page.locator("#work")).toBeVisible();
    await expect(page.locator("#capabilities")).toBeVisible();
    await expect(page.locator("#philosophy")).toBeVisible();
    await expect(page.locator("#faq")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();

    // Verify Hero headline and subtitle
    await expect(page.locator("h1")).toContainText("Jerry Melvin J");
    await expect(page.locator("h1")).toContainText("Senior Product Designer & UI/UX Specialist");
    await expect(
      page.getByText("Reimagining complex challenges into whimsical, impactful, human-centered experiences.")
    ).toBeVisible();

    // Verify Focus Tags
    await expect(page.getByText("E-Commerce Optimization").first()).toBeVisible();
    await expect(page.getByText("Design Systems").first()).toBeVisible();
    await expect(page.getByText("Authentication UX").first()).toBeVisible();
    await expect(page.getByText("UI Engineering").first()).toBeVisible();
  });

  test("2. Navigation anchor links scroll smoothly to matching sections", async ({ page }) => {
    // Click on Work nav link
    const workLink = page.locator("header nav").getByRole("link", { name: "Work" });
    await workLink.click();
    await expect(page.locator("#work")).toBeInViewport();

    // Click on Capabilities
    const capLink = page.locator("header nav").getByRole("link", { name: "Capabilities" });
    await capLink.click();
    await expect(page.locator("#capabilities")).toBeInViewport();

    // Click on FAQ
    const faqLink = page.locator("header nav").getByRole("link", { name: "FAQ" });
    await faqLink.click();
    await expect(page.locator("#faq")).toBeInViewport();

    // Click on Contact CTA
    const contactLink = page.locator("header nav").getByRole("link", { name: "Contact" });
    await contactLink.click();
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("3. Featured case studies render correctly with interactive modal deep-dives", async ({ page }) => {
    // Verify 3 key projects
    await expect(page.getByText("₹1 Lakh in a Single Day vs. One Month")).toBeVisible();
    await expect(
      page.getByText("Optimizing E-Commerce Accessibility & Authentication for High-Conversion Checkouts (OMRON)")
    ).toBeVisible();
    await expect(
      page.getByText("Bridging the Cultural & Logistics Gap in Gulf E-Commerce")
    ).toBeVisible();

    // Click "Read Deep Dive" on first project
    const deepDiveButtons = page.locator("#work button:has-text('Read Deep Dive')");
    await deepDiveButtons.first().click();

    // Dialog should open
    const dialog = page.locator("[role='dialog']");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("The Challenge & Friction Points");
    await expect(dialog).toContainText("The Strategic UX Solution");
    await expect(dialog).toContainText("Key Artifacts & Deliverables");

    // Close dialog
    const closeButton = dialog.locator("button:has-text('Close')");
    await closeButton.click();
    await expect(dialog).not.toBeVisible();
  });

  test("4. FAQ accordion toggles content cleanly", async ({ page }) => {
    // First item is open by default
    const firstFaqAnswer = page.getByText("I am based in Bengaluru, Karnataka, India (IST / UTC+5:30)");
    await expect(firstFaqAnswer).toBeVisible();

    // Click second question
    const secondQuestion = page.getByText("What is your primary design specialization?");
    await secondQuestion.click();
    const secondFaqAnswer = page.getByText("My core expertise centers on high-impact E-Commerce Conversion UX");
    await expect(secondFaqAnswer).toBeVisible();
  });

  test("5. Contact form validation flags blank inputs and submits successfully with valid values", async ({ page }) => {
    const contactSection = page.locator("#contact");
    await contactSection.scrollIntoViewIfNeeded();

    const submitButton = contactSection.locator("button[type='submit']");
    const nameInput = contactSection.locator("input#name");
    const emailInput = contactSection.locator("input#email");
    const messageInput = contactSection.locator("textarea#message");

    // Attempt to submit empty form
    await submitButton.click();

    // Validation errors should appear
    await expect(page.getByText("Name must be at least 2 characters.")).toBeVisible();
    await expect(page.getByText("Please provide a valid email address.")).toBeVisible();
    await expect(page.getByText("Message must be at least 10 characters.")).toBeVisible();

    // Fill valid data
    await nameInput.fill("Sarah Jenkins");
    await emailInput.fill("sarah.jenkins@growthbrands.co");
    
    // Select a project type button
    const projectTypeBtn = contactSection.getByRole("button", { name: "E-Commerce & Conversion UX" });
    await projectTypeBtn.click();

    await messageInput.fill(
      "Hi Jerry, we are looking to redesign our international checkout funnel to improve conversion across mobile and MENA regions. Let's set up a discovery call."
    );

    // Submit form
    await submitButton.click();

    // Verify success toast notification
    await expect(page.getByText("Message Sent Successfully!")).toBeVisible({ timeout: 10000 });
    await expect(
      page.getByText("Thank you for reaching out! Jerry will get back to you within 24 hours.")
    ).toBeVisible();

    // Verify form resets
    await expect(nameInput).toHaveValue("");
    await expect(emailInput).toHaveValue("");
    await expect(messageInput).toHaveValue("");
  });

  test("6. Direct contact links & footer location badge are present", async ({ page }) => {
    // Check mailto link
    const mailtoLinks = page.locator("a[href='mailto:jerrymelvinj@gmail.com']");
    await expect(mailtoLinks.first()).toBeVisible();

    // Check location badge
    const locationBadges = page.getByText("Bengaluru, Karnataka, India");
    await expect(locationBadges.first()).toBeVisible();
  });
});
