# Contributing

Thank you for helping ALEASAT move forward. The project is maintained by students, so clear documentation and considerate handoffs are as important as the code itself.

## Before you begin

1. Read the README for the application you will change.
2. Ask the current application maintainer which issue is ready to be worked on.
3. Keep internal mission information in approved private systems.

Internal contributors should also join the appropriate ALEASAT GitLab group and Discord channel.

For ground software work, run Yarn commands from the `alea-gsw` workspace. The outreach website itself is in `alea-gsw/apps/aleasat-site`.

## Branches

Create a focused branch from the current default branch:

```bash
git switch main
git pull
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

For outreach website work, enter `alea-gsw` first and run:

```bash
yarn workspace @aleasat/aleasat-site test:types
yarn workspace @aleasat/aleasat-site lint
```

Run the relevant unit or Cypress tests when your change affects behaviour.

## Reviews

Internal contributors should open a GitLab merge request in the canonical repository.

Contributors working only from this public GitHub snapshot should open a GitHub pull request.

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
