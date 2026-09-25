# Contributing

Thank you for helping ALEASAT move forward. The project is maintained by students, so clear documentation and considerate handoffs are as important as the code itself.

## Before you begin

1. Read the README for the application you will change.
2. Ask the current application maintainer which issue is ready to be worked on.
3. Keep internal mission information in approved private systems.

Internal contributors should also join the appropriate ALEASAT GitLab group and Discord channel.

For ground software work, run Yarn commands from the `alea-gsw` workspace. The outreach website itself is in `alea-gsw/apps/aleasat-site`.

## Ticket references

ALEASAT historically connects engineering work to OpenProject.

If your task has an OpenProject work package, keep its existing references:

```text
ALEA-2952
Parent issue: PP#2952
```

Use the ALEA reference in the pull request or merge request title when practical.

If the work exists only in this public GitHub repository, link the GitHub issue instead. Do not invent an OpenProject number.

See [Repository History and Work Tracking](../docs/REPOSITORY_HISTORY.md) before moving old GitLab work into GitHub.

## Branches

For OpenProject work, prefer a branch that keeps the ticket visible:

```bash
git switch main
git pull
git switch -c ALEA-2952-short-description
```

For public GitHub-only maintenance, focused prefixes are also fine:

```text
fix/short-description
docs/short-description
test/short-description
chore/short-description
```

## Commits

Review your changes before staging them:

```bash
git status
git diff
git add path/to/changed-file
```

For OpenProject work, keep the ticket in the commit subject when it adds useful traceability:

```bash
git commit -m "ALEA-2952 test: add join page Cypress coverage"
```

For public GitHub-only work, use a clear conventional commit:

```bash
git commit -m "docs(site): improve contributor onboarding"
```

Prefer a small number of meaningful commits over vague updates.

Do not rewrite old GitLab commits just to change their messages or ticket format.

## Checks

For outreach website work, enter `alea-gsw` first and run:

```bash
yarn workspace @aleasat/aleasat-site test:types
yarn workspace @aleasat/aleasat-site lint
```

Run the relevant unit or Cypress tests when your change affects behaviour.

## Reviews

Internal contributors should open a GitLab merge request in the canonical repository.

Contributors working only from this public GitHub snapshot should open a GitHub pull request.

The GitHub pull request template keeps the original ALEA and PP ticket fields while also supporting GitHub-only maintenance.

Include:

- The user or team problem being solved
- A plain language summary of the change
- Screenshots for visible website changes
- The checks you ran
- Any follow-up work or known limitation

Request review from the current maintainer, not a former role holder.

Do not merge your own work unless the current team process explicitly allows it.

## Handoffs

Before leaving a role, make sure the next maintainer knows:

- Which services and pages you owned
- How to run and test them
- Where assets and documentation live
- Which work remains unfinished
- Who can grant access to private systems

Avoid documenting knowledge only in direct messages. Put durable technical guidance in the repository or approved team wiki.
