# ALEASAT Ground Software

The ground software workspace brings the ALEASAT public website, mission dashboard, backend services, and shared TypeScript packages into one Yarn workspace.

The package name is `barbours-cut`, but the workspace itself is nested under `alea-gsw` in the full mission software repository.

## Where to run commands

From the full repository root:

```text
alea-gsw/
  apps/
    aleasat-site/
  packages/
  package.json
  yarn.lock
  turbo.json
```

Run Yarn commands from `alea-gsw`.

The outreach website source is in `alea-gsw/apps/aleasat-site`.

## Requirements

- Git
- Node.js 22 or newer
- Corepack
- Yarn 4.0.1, provided by the workspace
- Several gigabytes of free storage for dependencies and generated files

Internal contributors also need access to the ALEASAT GitLab group.

VS Code is common on the team, but any editor with TypeScript and Biome support will work.

## Clone the repository

### Public GitHub snapshot

```bash
git clone https://github.com/jumiknows/Aleasat-Mission-Software.git
cd Aleasat-Mission-Software/alea-gsw
```

### Internal ALEASAT repository

```bash
git clone https://gitlab.com/alea-2020/mission-operations/barbours-cut.git
cd barbours-cut/alea-gsw
```

SSH is also supported by both hosts.

Before continuing, confirm that `package.json`, `yarn.lock`, `apps`, and `packages` are in your current directory.

## Install the workspace

```bash
corepack enable
yarn install
yarn build:types
```

Run `yarn install` from `alea-gsw`. You do not need to install dependencies again inside each application.

## Application map

### Web applications

| Directory | Role |
| --- | --- |
| `apps/aleasat-site` | Public outreach website at aleasat.space |
| `apps/dashboard` | Mission operations dashboard |
| `apps/aleasat-docs` | API and engineering documentation interface |

### Mission services

| Directory | Role |
| --- | --- |
| `apps/command-control` | Command and control service |
| `apps/job-queue` | Background job coordination |
| `apps/launchpad` | Launchpad service and persistence |
| `apps/mission` | Mission domain service |
| `apps/orbit-propagation` | Orbit propagation service |
| `apps/pass-scheduling` | Ground pass scheduling service |
| `apps/repo` | Repository service |
| `apps/gmat` | GMAT integration |
| `apps/image-gen-worker` | Image generation worker |

### Shared code

Reusable packages live in `packages`. The outreach website relies most directly on:

- `packages/ui` for shared layout and interface components
- `packages/utils` for shared application utilities
- `packages/types` for common TypeScript types
- API packages for generated service clients

## Work on the outreach website

From `alea-gsw`:

```bash
yarn workspace @aleasat/aleasat-site dev
```

Open `http://localhost:3000`.

Before opening a review, run:

```bash
yarn workspace @aleasat/aleasat-site test:types
yarn workspace @aleasat/aleasat-site lint
```

For browser tests, keep the development server running in one terminal and use this command in another terminal from `alea-gsw`:

```bash
yarn workspace @aleasat/aleasat-site cy:open
```

See the [outreach onboarding guide](docs/OUTREACH_ONBOARDING.md) for the full workflow.

## Common workspace commands

```bash
yarn dev
yarn test:types
yarn test:unit
yarn lint
yarn format
```

The root build intentionally excludes some web applications. Run the workspace specific commands when validating the outreach site, dashboard, or documentation app.

## Documentation

- [Contributor guide](CONTRIBUTING.md)
- [Outreach onboarding](docs/OUTREACH_ONBOARDING.md)
- [Figma mockups and wireframes](https://www.figma.com/design/fZ2igaJDJR0llYSKZPzqn8/ALEASAT-Website?node-id=120-3&p=f&t=AzR2QPzzVf9hrviY-0)
- [Artifact workflow](docs/ASSET_WORKFLOW.md)
- [Outreach page guide](apps/aleasat-site/README.md)

Internal operational details remain in the private team wiki. Public documentation should never contain credentials, private endpoints, personal contact information, or sensitive mission data.
