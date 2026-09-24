# Outreach Website Onboarding

Welcome to the ALEASAT outreach website. This guide gets a new contributor from a fresh computer to a reviewed first change.

## What you will work on

The public website lives in `apps/aleasat-site`. It uses:

- Next.js 15
- React 19
- TypeScript
- Material UI
- Shared components from `packages/ui`
- Biome for code quality checks
- Cypress for browser tests
- Yarn 4 workspaces and Turborepo

The website also uses images, video, models, and other large files served from `artifact.aleasat.space`. Their source files live in a separate GitLab project.

## 1. Get access

Before setup, confirm that you can access:

- The `alea-2020` GitLab group
- The Barbours Cut repository
- The artifact repository if your task involves media
- The MOPS frontend Discord channel
- The private wiki if your role requires it

Ask the current Mission Operations lead if any access is missing.

## 2. Install the prerequisites

Install Git and Node.js 22 or newer. Then enable Corepack:

```bash
corepack enable
```

The repository already includes Yarn 4.0.1. You do not need to install Yarn globally.

## 3. Clone the repository

HTTPS:

```bash
git clone https://gitlab.com/alea-2020/mission-operations/barbours-cut.git
cd barbours-cut
```

SSH:

```bash
git clone git@gitlab.com:alea-2020/mission-operations/barbours-cut.git
cd barbours-cut
```

The old `aleasat-software` clone address is no longer the correct address for this workspace.

## 4. Install dependencies

From the repository root:

```bash
yarn install
yarn build:types
```

Run installation once at the workspace root. Running `yarn install` again inside `apps/aleasat-site` is unnecessary.

## 5. Start the website

```bash
yarn workspace @aleasat/aleasat-site dev
```

Open `http://localhost:3000`.

If the site does not start, check these items first:

1. `node --version` reports version 22 or newer.
2. `yarn --version` reports 4.0.1.
3. `yarn install` completed at the repository root.
4. Another process is not already using port 3000.
5. Your branch contains the newest default branch changes.

## 6. Learn the important directories

| Path | What belongs there |
| --- | --- |
| `apps/aleasat-site/src/app` | Routes, layouts, and page metadata |
| `apps/aleasat-site/src/components` | Page sections and reusable site components |
| `apps/aleasat-site/src/data` | Team, member, and spacecraft content |
| `apps/aleasat-site/public` | Smaller files shipped directly with the website |
| `apps/aleasat-site/cypress/e2e` | Browser tests for public pages |
| `packages/ui/src` | Components and layouts shared across applications |

Read the [page guide](../apps/aleasat-site/README.md) before changing navigation or content.

## 7. Create your branch

```bash
git switch -c feat/firstname-onboarding
```

Choose a small task agreed on with the current maintainer. A good first task is a copy correction, an accessibility improvement, or a test for an existing page. Do not add temporary text to the production home page only to prove that setup works.

## 8. Understand Material UI and shared components

Page code can import Material UI directly:

```tsx
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
```

Shared ALEASAT components come from workspace packages:

```tsx
import Navbar from "@aleasat/ui/layout/Navbar";
import Footer from "@aleasat/ui/layout/Footer";
```

Before creating a new component, search `packages/ui/src` and the site component folders. Reusing an existing component keeps the site consistent.

## 9. Check your work

Run the type and code quality checks:

```bash
yarn workspace @aleasat/aleasat-site test:types
yarn workspace @aleasat/aleasat-site lint
```

Biome is the current code quality tool. The old ESLint onboarding instructions no longer match this application.

For Cypress, leave the development server running and open a second terminal:

```bash
yarn workspace @aleasat/aleasat-site cy:open
```

Choose E2E testing, select a browser, and run the test that covers your page. Existing specifications include the home, about, join, and sponsor experiences.

## 10. Commit and open a merge request

```bash
git status
git diff
git add path/to/your-file
git commit -m "feat(site): complete first outreach task"
git push -u origin feat/firstname-onboarding
```

Open a GitLab merge request. Include a short explanation, screenshots for visual work, and the checks you ran. Assign yourself and request review from the current maintainer.

## When you are stuck

Share these details in the MOPS frontend channel:

- The command you ran
- The complete error message
- Your Node and Yarn versions
- The application and branch you are working in
- What you already tried

You are not expected to know the whole monorepo before contributing. Ask early, leave notes for the next person, and keep the work moving as a team.

