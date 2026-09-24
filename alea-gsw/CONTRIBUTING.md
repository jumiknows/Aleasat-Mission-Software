# Contributing

Thank you for helping ALEASAT move forward. The project is maintained by students, so clear documentation and considerate handoffs are as important as the code itself.

## Before you begin

1. Join the appropriate ALEASAT GitLab group and Discord channel.
2. Read the README for the application you will change.
3. Ask the current application maintainer which issue is ready to be worked on.
4. Keep internal mission information in approved private systems.

## Branches

Create a focused branch from the current default branch:

```bash
git switch -c feat/firstname-short-description
```

Other common prefixes are `fix`, `docs`, `test`, and `chore`.

## Commits

Review your changes before staging them:

```bash
git status
git diff
git add path/to/changed-file
git commit -m "docs(site): improve contributor onboarding"
```

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Prefer a small number of meaningful commits over many vague updates.

## Checks

For outreach website work:

```bash
yarn workspace @aleasat/aleasat-site test:types
yarn workspace @aleasat/aleasat-site lint
```

Run the relevant unit or Cypress tests when your change affects behaviour.

## Merge requests

In the GitLab merge request:

- Explain the user or team problem being solved
- Summarize the change in plain language
- Include screenshots for visible website changes
- List the checks you ran
- Note any follow-up work or known limitation
- Request review from the current maintainer, not a former role holder

Do not merge your own work unless the current team process explicitly allows it.

## Handoffs

Before leaving a role, make sure the next maintainer knows:

- Which services and pages you owned
- How to run and test them
- Where assets and documentation live
- Which work remains unfinished
- Who can grant access to private systems

Avoid documenting knowledge only in direct messages. Put durable technical guidance in the repository or approved team wiki.

