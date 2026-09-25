# Repository History and Work Tracking

This GitHub repository is a public snapshot of ALEASAT software. The active engineering repository is private GitLab under the ALEASAT Software group.

## Preserve original history

Do not manually replay an old GitLab change as a new GitHub commit just to make it appear in this repository.

If an original GitLab commit is already present here, keep it untouched. The commit SHA preserves the original author, timestamp, message, ticket reference, and review context.

The public GitHub history already contains original GitLab commit objects such as:

- `db90518b` for ALEA-2367
- `3b1b4cd8` for ALEA-2399
- `8aacdd59` for the original repository setup work

These same SHAs exist in the private GitLab repository.

## History audit

A repository audit on September 24, 2026 found that the current GitLab `dev` branch has continued well beyond the public GitHub snapshot.

Recent GitLab commits from 2025 and 2026 were not present in GitHub when sampled. The two repositories should therefore be treated as related histories, not as synchronized mirrors.

Do not copy the private GitLab repository into this public repository without confirming that the code, commit messages, screenshots, uploads, and operational details are approved for public release.

## OpenProject ticket references

ALEASAT historically ties code changes to OpenProject work packages.

When a change has an OpenProject ticket, keep both forms used by the original workflow:

```text
ALEA-2952
PP#2952
```

For pull requests, use the ALEA reference in the title when practical:

```text
ALEA-2952 test: add join page coverage
```

Keep the parent issue in the pull request body:

```text
Parent issue: PP#2952
```

For public GitHub maintenance that has no OpenProject ticket, link the GitHub issue instead. Do not invent an ALEA number.

## Private GitLab merge requests

Original GitLab merge request links are useful historical evidence. Keep them when they already exist in commit messages.

Do not recreate old GitLab merge requests as fake GitHub pull requests. That would make the review timeline misleading.

## Migrating approved history

If the team approves a GitLab branch or set of commits for public release, preserve the original Git objects instead of rebuilding the changes by hand.

The preferred migration is done from a trusted workstation with access to both remotes:

```bash
git remote add gitlab git@gitlab.com:alea-2020/software/aleasat-software.git
git fetch gitlab --tags

git remote add github git@github.com:jumiknows/Aleasat-Mission-Software.git
git fetch github
```

Compare the histories before publishing anything:

```bash
git log --oneline --decorate --graph --all
git merge-base gitlab/dev github/main
git log github/main..gitlab/dev --oneline
```

Only publish branches or commits that have been approved for the public mirror.

Avoid `git cherry-pick` for historical migration when preserving the original SHA and authorship matters.

## Current contribution workflow

Internal ALEASAT work should continue to use the canonical GitLab and OpenProject workflow.

Public GitHub-only maintenance can use GitHub Issues and pull requests.

Both workflows should keep commits small, explain testing, and avoid vague messages such as `update`, `fix stuff`, or `copy pasta`.
