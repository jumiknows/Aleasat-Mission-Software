# Media and Artifact Workflow

The outreach website keeps large and shared media outside the application repository.

## Two locations with different jobs

| Location | Purpose |
| --- | --- |
| [Artifact GitLab repository](https://gitlab.com/alea-2020/mission-operations/artifact) | Source files and version history for shared media |
| [artifact.aleasat.space](https://artifact.aleasat.space/) | Public delivery host used by the website and dashboard |

The website refers to public files with URLs such as:

```text
https://artifact.aleasat.space/logos/ALEASAT_Logo.png
https://artifact.aleasat.space/team-photo/team-photo.avif
https://artifact.aleasat.space/space-components/aleasat-drawing.svg
```

Existing asset groups include logos, team photos, sponsor graphics, spacecraft imagery, videos, three dimensional models, and simulation data.

## Add or replace an asset

1. Confirm that ALEASAT has permission to publish the file.
2. Remove private metadata and personal information that should not be public.
3. Resize and compress the file for its intended use.
4. Give it a clear, stable name. Avoid names such as `final2` or `new-new`.
5. Place it in the matching directory in the artifact repository.
6. Open a merge request and explain where the asset will appear.
7. Ask the current artifact maintainer to publish the approved change.
8. Verify the final `artifact.aleasat.space` URL in a browser.
9. Update the website reference in a separate Barbours Cut merge request.
10. Test the page on desktop and mobile widths.

Do not commit large duplicate media files into `apps/aleasat-site/public` when the artifact host is the established source.

## Team photos

Team photo updates usually touch two systems:

- The image file under the artifact repository's `team-photo` area
- The member record in `apps/aleasat-site/src/data/members.ts`

The member card builds its public URL from the filename stored in the member data. A missing image currently falls back to the placeholder image on the artifact host.

Before publishing a headshot, confirm the person's preferred name, role, team, image, and permission to appear publicly. The member should identify their own photo rather than relying on someone else to guess.

## Choosing a format

- Use SVG for logos and simple vector artwork when an approved vector source exists.
- Use AVIF or WebP for large photographic website images when browser support has been checked.
- Use PNG when transparency or exact pixel rendering matters.
- Use JPEG for ordinary photographs when a modern format is not practical.
- Keep video and three dimensional assets on the artifact host.

## Replacing a file safely

If a file is already used in production, prefer a new filename when the content changes significantly. This avoids stale cached copies and makes rollback easier.

Search the ground software repository for the existing URL before removing an asset. The same file may be used by the outreach site, dashboard, metadata, and tests.

## Information that stays private

Never publish:

- Credentials, tokens, or private service addresses
- Raw member spreadsheets or student numbers
- Unapproved headshots
- Sensitive mission operations data
- Internal documents that were not cleared for public release

If you are uncertain, ask the current Mission Operations lead before uploading.

