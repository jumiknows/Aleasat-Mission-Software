# Outreach Website Onboarding

Welcome to the ALEASAT outreach website. This guide gets a new contributor from a fresh computer to a reviewed first change.

## What you will work on

The public outreach website is not at the repository root.

From the repository root, the application is located at:

```text
alea-gsw/apps/aleasat-site
```

The ground software workspace is:

```text
alea-gsw
```

Run Yarn workspace commands from `alea-gsw`. Edit outreach website code inside `alea-gsw/apps/aleasat-site`.

The website uses:

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

Before setup, confirm that you can access the systems needed for your role.

Internal ALEASAT contributors normally need:

- The `alea-2020` GitLab group
- The current mission software repository
- The artifact repository if the task involves media
- The MOPS frontend Discord channel
- The private wiki if the role requires it

Public contributors can use this GitHub snapshot for local development and code review.

Ask the current Mission Operations lead if internal access is missing.

## 2. Install the prerequisites

Install Git and Node.js 22 or newer.

Check your versions:

```bash
git --version
node --version
```

Enable Corepack:

```bash
corepack enable
```

The ground software workspace pins Yarn 4.0.1 in `alea-gsw/.yarnrc.yml`. You do not need to install Yarn globally.

## 3. Clone the repository

### Public GitHub snapshot

HTTPS:

```bash
git clone https://github.com/jumiknows/Aleasat-Mission-Software.git
cd Aleasat-Mission-Software/alea-gsw
```

SSH:

```bash
git clone git@github.com:jumiknows/Aleasat-Mission-Software.git
cd Aleasat-Mission-Software/alea-gsw
```

### Internal ALEASAT repository

If you are an active ALEASAT team member and use the canonical GitLab repository:

```bash
git clone https://gitlab.com/alea-2020/mission-operations/barbours-cut.git
cd barbours-cut/alea-gsw
```

Or with SSH:

```bash
git clone git@gitlab.com:alea-2020/mission-operations/barbours-cut.git
cd barbours-cut/alea-gsw
```

The important part is that your terminal must end inside the `alea-gsw` workspace before you install dependencies or run the website.

Confirm your location:

```bash
pwd
ls
```

You should see files such as `package.json`, `yarn.lock`, `turbo.json`, and the `apps` and `packages` directories.

## 4. Install dependencies

From `alea-gsw`:

```bash
yarn install
yarn build:types
```

Run installation once at the workspace root. Do not run a second `yarn install` inside `apps/aleasat-site`.

## 5. Start the website

Stay inside `alea-gsw` and run:

```bash
yarn workspace @aleasat/aleasat-site dev
```

Open `http://localhost:3000`.

If the site does not start, check these items first:

1. `node --version` reports version 22 or newer.
2. `yarn --version` reports 4.0.1.
3. Your terminal is inside `alea-gsw`.
4. `yarn install` completed successfully from `alea-gsw`.
5. Another process is not already using port 3000.
6. Your branch contains the newest default branch changes.

## 6. Learn the important directories

From the `alea-gsw` workspace:

| Path | What belongs there |
| --- | --- |
| `apps/aleasat-site/src/app` | Routes, layouts, and page metadata |
| `apps/aleasat-site/src/components` | Page sections and reusable site components |
| `apps/aleasat-site/src/data` | Team, member, and spacecraft content |
| `apps/aleasat-site/public` | Smaller files shipped directly with the website |
| `apps/aleasat-site/cypress/e2e` | Browser tests for public pages |
| `packages/ui/src` | Components and layouts shared across applications |

Read the [outreach website page guide](../apps/aleasat-site/README.md) before changing navigation or content.

The [ALEASAT Website Figma file](https://www.figma.com/design/fZ2igaJDJR0llYSKZPzqn8/ALEASAT-Website?node-id=120-3&p=f&t=AzR2QPzzVf9hrviY-0) contains mockups and wireframes from multiple project phases. Link the exact frame you are implementing and ask the current maintainer to confirm that it is still the intended design.

## 7. Create your branch

Start from the newest default branch, then create a focused branch:

```bash
git switch main
git pull
git switch -c feat/firstname-short-description
```

Choose a small task agreed on with the current maintainer. A good first task is a copy correction, an accessibility improvement, or a test for an existing page.

Do not add temporary text to the production home page only to prove that setup works.

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

From `alea-gsw`, run:

```bash
yarn workspace @aleasat/aleasat-site test:types
yarn workspace @aleasat/aleasat-site lint
```

Biome is the current code quality tool.

For Cypress, leave the development server running and open a second terminal in `alea-gsw`:

```bash
yarn workspace @aleasat/aleasat-site cy:open
```

Choose E2E testing, select a browser, and run the test that covers your page. Existing specifications include the home, about, join, and sponsor experiences.

## 10. Commit and open a review

Review only the files you intended to change:

```bash
git status
git diff
git add path/to/your-file
git commit -m "feat(site): complete outreach task"
git push -u origin feat/firstname-short-description
```

Internal contributors should open a GitLab merge request in the canonical repository.

If you are working only from this GitHub snapshot, open a GitHub pull request.

Include:

- A short explanation of the change
- Screenshots for visual work
- The checks you ran
- Any follow-up work or known limitation

Request review from the current maintainer.

## When you are stuck

Share these details with the current maintainer or in the MOPS frontend channel:

- The command you ran
- The complete error message
- Your Node and Yarn versions
- Your current directory
- The application and branch you are working in
- What you already tried

You are not expected to know the whole monorepo before contributing. Ask early, leave useful notes for the next person, and keep the work moving as a team.
