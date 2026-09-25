# ALEASAT Outreach Website

This Next.js application powers the public ALEASAT website. It introduces the mission, spacecraft, team, sponsors, and ways to join the project.

## Location in the repository

From the full mission software repository root, this application lives at:

```text
alea-gsw/apps/aleasat-site
```

The Yarn workspace root is:

```text
alea-gsw
```

Run install, development, lint, type, and test commands from `alea-gsw`. Do not run a separate `yarn install` inside this application directory.

## Run the site

From the full repository root:

```bash
cd alea-gsw
corepack enable
yarn install
yarn build:types
yarn workspace @aleasat/aleasat-site dev
```

Open `http://localhost:3000`.

Node.js 22 or newer is required. The workspace provides Yarn 4.0.1.

If you have not cloned the repository yet, start with the [outreach onboarding guide](../../docs/OUTREACH_ONBOARDING.md).

## Page guide

| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Mission overview, plan, team, radio participation, and featured sponsors |
| `/about` | `src/app/about/page.tsx` | Disaster response mission, imagery, innovation, and public impact |
| `/spaceship` | `src/app/spaceship/page.tsx` | Spacecraft overview, subsystem components, and key specifications |
| `/team` | `src/app/team/page.tsx` | Leadership, statistics, subteams, and member profiles |
| `/sponsor` | `src/app/sponsor/page.tsx` | Sponsor recognition and partnership information |
| `/join-us` | `src/app/join-us/page.tsx` | Mission introduction and open team opportunities |
| `/auth/signin` | `src/app/auth/signin/page.tsx` | Optional sign-in flow when authentication is enabled |

The shared navbar and footer are assembled in `src/app/layout.tsx` with components from `packages/ui`.

## Design source

The [ALEASAT Website Figma file](https://www.figma.com/design/fZ2igaJDJR0llYSKZPzqn8/ALEASAT-Website?node-id=120-3&p=f&t=AzR2QPzzVf9hrviY-0) contains outreach, dashboard, mission control, and mobile concepts created across several project phases.

Use it as design context, not as an automatic description of the current application. Before implementing a frame:

1. Link the exact Figma node in the issue or merge request.
2. Compare the frame with the current route, shared components, and data model.
3. Confirm with the current maintainer whether the frame is current, exploratory, or historical.
4. Reuse Material UI and `packages/ui` components before adding one-off styles.
5. Include desktop and mobile screenshots with the merge request.

The Figma canvas includes concepts outside the public outreach site. A dashboard or mission control frame should not be added to `aleasat-site` simply because it appears in the same file.

## Where to make common changes

| Change | Start here |
| --- | --- |
| Home page section | `src/components/home` |
| About page content | `src/components/about` |
| Spacecraft content | `src/components/space-components` and `src/data/boardData.ts` |
| Team descriptions | `src/data/teams.ts` |
| Member names, roles, and image filenames | `src/data/members.ts` |
| Team page layout | `src/components/team` |
| Sponsor logos and tiers | `src/components/home/sponsors` |
| Join page positions | `src/components/join-us/positions.ts` |
| Shared navbar or footer | `packages/ui/src/layout` |
| Browser tests | `cypress/e2e` |

Paths in this section are relative to `alea-gsw/apps/aleasat-site` unless they begin with `packages/`. Shared package paths are relative to `alea-gsw`.

## Media files

Small files that belong only to this application can live in `public`. Large or shared files are served from `https://artifact.aleasat.space` and maintained in the [artifact repository](https://gitlab.com/alea-2020/mission-operations/artifact).

Read the [media and artifact workflow](../../docs/ASSET_WORKFLOW.md) before adding, renaming, or removing production media.

## Checks

Run these from `alea-gsw`:

```bash
yarn workspace @aleasat/aleasat-site test:types
yarn workspace @aleasat/aleasat-site lint
```

To open Cypress:

```bash
yarn workspace @aleasat/aleasat-site cy:open
```

Keep the development server running while using the end to end tests.

## Optimizing a three dimensional model

The existing model workflow uses glTF Transform and gltfjsx:

```bash
yarn dlx -p @gltf-transform/cli gltf-transform optimize sat6.glb sat6-optimized.glb --compress draco --texture-compress webp --texture-size 512
yarn dlx gltfjsx@6.2.16 sat6-optimized.glb
```

Do not replace a production model until its appearance, loading time, attribution, and artifact URL have been reviewed.

## More help

New contributors should begin with the [outreach onboarding guide](../../docs/OUTREACH_ONBOARDING.md). Internal deployment and access details belong in the private wiki.
