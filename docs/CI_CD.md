# CI and CD

ALEASAT already has a mature CI and CD system in the private GitLab repository. The public GitHub snapshot should preserve the useful engineering checks without copying private deployment credentials or infrastructure into a public repository.

## Canonical GitLab pipeline

The private GitLab pipeline remains the source of truth for full mission software delivery.

It includes:

- Path-based pipelines so unrelated applications do not rebuild
- Node 22 builds
- Shared type generation
- Type checking
- Biome formatting and lint checks
- Unit tests
- Integration tests
- Cypress end-to-end tests
- Docker image builds
- Docker image smoke tests
- Container registry publishing
- Review environments
- Staging deployment
- Production deployment through the private GitOps repository
- Hardware-in-the-loop jobs on dedicated runners
- ALEA and OpenProject merge request checks

Those deployment jobs depend on private GitLab registry credentials, Cloudflare configuration, Kubernetes contexts, SSH keys, private GitOps repositories, and physical hardware runners. They should remain private.

## Public GitHub pipeline

GitHub runs a public-safe outreach pipeline for changes that affect:

```text
alea-gsw/apps/aleasat-site
alea-gsw/packages/ui
alea-gsw/packages/utils
```

The GitHub pipeline checks:

1. Shared type generation
2. TypeScript type checks
3. Biome lint and formatting
4. A production Next.js build
5. Cypress end-to-end tests in Chrome
6. The outreach Docker image build

The checks use Node.js 22 to match the current workspace requirement.

## Pull request ticket checks

The GitHub pull request policy preserves the original ALEASAT convention when a change belongs to OpenProject.

An OpenProject-backed title should look like:

```text
ALEA-2952 test: add join page coverage
```

The pull request body must contain:

```text
Parent issue: PP#2952
```

Public GitHub-only maintenance does not need a fake ALEA ticket.

## Deployment

The GitHub repository is already connected to Vercel for the public outreach application. Vercel provides its own deployment status on GitHub commits and pull requests.

GitHub Actions intentionally does not contain the private GitLab deployment credentials or reproduce the private Kubernetes and GitOps deployment chain.

This keeps the public mirror useful for contributors while leaving operational access in the system that already owns it.

## Recommended branch checks

For normal changes to `main`, require these checks before merging:

- Pull Request Policy
- Outreach CI / Types and lint
- Outreach CI / Production build
- Outreach CI / Cypress E2E
- Outreach CI / Docker build
- Vercel

The repository owner must configure required checks in GitHub branch protection or a ruleset.

## Relationship to GitLab

Do not replace the private GitLab pipeline with GitHub Actions unless the active ALEASAT maintainers explicitly decide to migrate the canonical infrastructure.

The public GitHub workflow is a safe companion pipeline for the public snapshot, not a second production control plane.
