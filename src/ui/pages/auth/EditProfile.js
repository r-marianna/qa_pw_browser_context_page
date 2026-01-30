import { test } from '@playwright/test';

export class EditProfile {
  constructor(page) {
    this.page = page;
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.updateSettingsBtn = page.getByRole('button',
      { name: 'Update Settings' }
    );
  }

  async open() {
    await test.step(`Open 'Sign In' page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async fillNewPasswordField(password) {
    await test.step(`Fill in password field`, async () => {
      await this.newPasswordField.fill(password);
    });
  }

  async clickUpdateSettingsBtn() {
    await test.step(`Click on the Update Settings btn`, async () => {
      await this.updateSettingsBtn.click();
    });
  }
}