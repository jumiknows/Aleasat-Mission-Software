# ALEASAT Mission Software

This repository is a public snapshot of software built by the ALEASAT collaboration between UBC Orbit and SFU SAT. It includes flight software, ground software, mission operations tools, and the public outreach website.

The active team develops primarily in GitLab. This GitHub repository provides a readable public entry point and preserves the work for future contributors.

## Repository guide

| Directory | Purpose |
| --- | --- |
| `alea-fsw` | Flight software, embedded firmware, board support, and hardware interfaces |
| `alea-gsw` | Ground software monorepo, including the public website, dashboard, services, and shared packages |
| `tools` | Supporting development and mission tooling |

## Outreach website quick start

The outreach website is nested inside the ground software workspace:

```text
alea-gsw/apps/aleasat-site
```

Clone this GitHub snapshot and enter the workspace:

```bash
git clone https://github.com/jumiknows/Aleasat-Mission-Software.git
cd Aleasat-Mission-Software/alea-gsw
corepack enable
yarn install
yarn build:types
yarn workspace @aleasat/aleasat-site dev
```

Then open `http://localhost:3000`.

Node.js 22 or newer is required. See the outreach onboarding guide below for the full setup and contribution workflow.

## Start here

- [Ground software overview](alea-gsw/README.md)
- [Contributor guide](alea-gsw/CONTRIBUTING.md)
- [Outreach website onboarding](alea-gsw/docs/OUTREACH_ONBOARDING.md)
- [Outreach website page guide](alea-gsw/apps/aleasat-site/README.md)
- [Outreach website mockups and wireframes](https://www.figma.com/design/fZ2igaJDJR0llYSKZPzqn8/ALEASAT-Website?node-id=120-3&p=f&t=AzR2QPzzVf9hrviY-0)
- [Media and artifact workflow](alea-gsw/docs/ASSET_WORKFLOW.md)
- [Private team wiki](https://wiki.aleasat.space/), available to approved team members

## Public systems

- [ALEASAT outreach website](https://www.aleasat.space/)
- [Shared artifact host](https://artifact.aleasat.space/)

## Project ownership

ALEASAT is a team project with contributions from students across several engineering and operations subteams. Repository history remains the source of truth for individual contributions.

Ernest Wong contributed to mission operations and the outreach website through SFU SAT. That work is now being handed to active team maintainers so the project can continue beyond any one student.

For access, deployment, or operational questions, contact the current ALEASAT Mission Operations lead through the team Discord. Do not place credentials or internal mission details in public issues.
