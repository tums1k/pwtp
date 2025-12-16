import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  timeout: 60000,
  workers: 4,

  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry'
  },

  projects: [
    { name: 'setup-admin', testMatch: /admin\.setup\.ts/ },
    { name: 'setup-user', testMatch: /user\.setup\.ts/ },
    { name: 'setup-readonly', testMatch: /readonly\.setup\.ts/ },

    {
      name: 'ui-admin',
      testDir: 'tests/ui/admin',
      use: { storageState: 'auth/admin.json' },
      dependencies: ['setup-admin']
    },
    {
      name: 'ui-user',
      testDir: 'tests/ui/user',
      use: { storageState: 'auth/user.json' },
      dependencies: ['setup-user']
    },
    {
      name: 'ui-readonly',
      testDir: 'tests/ui/readonly',
      use: { storageState: 'auth/readonly.json' },
      dependencies: ['setup-readonly']
    }
  ]
});
