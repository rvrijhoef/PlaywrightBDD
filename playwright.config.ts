import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'features/steps/*.ts',
});

const testResultsDir = './test-results';

export default defineConfig({
  testDir,
  outputDir: `${testResultsDir}/test-artifacts`,
  reporter: [
    cucumberReporter('html', {
      outputFile: `${testResultsDir}/cucumber-report/index.html`,
      externalAttachments: true,
    }),
    ['line'],
    ['junit', { outputFile: `${testResultsDir}/playwright-test-report.xml` }],
    ['html', { open: 'never', outputFolder: `${testResultsDir}/playwright-html-report` }],
  ],
  use: {
    trace: 'off',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
