# Engineering Review Standard

ALEASAT changes should be easy to understand, verify, and revisit months later.

The goal is not to make every pull request long. The goal is to preserve the evidence a reviewer needs to answer five questions:

1. What problem or requirement does this change address?
2. Why was this approach chosen?
3. What changed?
4. How was it verified?
5. What remains risky, unsupported, or unresolved?

If a section does not help answer one of those questions, remove it.

## 1. Traceability

Every non-trivial change should point back to the work that justified it.

Use the strongest available source:

- OpenProject work package and parent issue
- GitHub issue
- subsystem requirement
- design or verification document
- bug report or field observation

For ALEASAT work, keep the historical identifiers when they exist:

```text
OpenProject ticket: ALEA-842
Parent issue: PP#842
```

Do not invent an ALEA or PP number for GitHub-only maintenance.

## 2. Problem statement

Describe the current behavior, limitation, or requirement before describing the solution.

A useful problem statement explains:

- what is happening now
- why that is insufficient
- who or what is affected
- any relevant constraint

Avoid generic statements such as "improves reliability" unless the failure mode is explained.

## 3. Design and rationale

Explain the decisions that a future maintainer would otherwise have to rediscover.

Include:

- the chosen mechanism
- important parameters or assumptions
- why the mechanism fits the requirement
- meaningful alternatives that were rejected
- resource, timing, compatibility, or safety constraints when relevant

Do not document obvious syntax or restate the diff line by line.

A design explanation earns its place when it answers "why this way?"

## 4. Verification

Testing should show evidence, not only say that tests passed.

For each important behavior, record:

- what was tested
- test environment or hardware when it matters
- expected result
- observed result
- acceptance threshold when one exists

Use the strongest applicable level:

1. static checks
2. unit tests
3. integration tests
4. end-to-end tests
5. bench or hardware tests
6. operational or field validation

Do not claim a higher validation level than was actually completed.

### Measured results

When performance, timing, memory, accuracy, or resource use matters, include the measurement and enough context to interpret it.

Good:

```text
Expected duration: 2.5 s
Observed duration: 2.493646 s
Difference: 0.25416%
Clock source: portCPU_CLOCK_US()
```

Weak:

```text
Timing looked good.
```

## 5. Evidence and references

Reference material should support a decision, requirement, algorithm, or result.

Useful references include:

- subsystem requirements
- API or RTOS documentation
- processor or component datasheets
- standards
- algorithm specifications
- peer-reviewed papers
- canonical library implementations
- prior issues, merge requests, or design notes

Prefer primary sources where practical.

Do not add links only to make a pull request look researched. A reference should answer a reviewer question.

## 6. Risks and limitations

Call out anything that could surprise the next engineer.

Examples:

- counter rollover
- memory lifetime
- race conditions
- hardware assumptions
- browser or platform differences
- backwards compatibility
- migration requirements
- untested paths
- known accuracy limits

If a failure mode is important enough to influence the implementation, document it.

## 7. Long-form engineering notes

A pull request should remain reviewable.

Create a separate engineering note when the evidence is too large for the PR, especially for:

- timing studies
- hardware characterization
- algorithm selection
- resource measurements
- test campaigns
- architecture decisions
- subsystem verification

A useful engineering note normally contains:

1. document title and identifier
2. revision and revision history
3. objective or requirement
4. background
5. design rationale
6. implementation or method
7. test setup
8. measured results
9. analysis
10. limitations
11. conclusion
12. references

Screenshots, logs, plots, or tables should support a specific statement in the text.

## 8. Review quality

Before review, verify that numbers, units, labels, screenshots, and conclusions agree with each other.

Detailed documentation can still be wrong. A reviewer should be able to trace a conclusion back to the evidence used to produce it.

## 9. Pull request length

Use the smallest amount of documentation that fully supports the change.

A typo fix may need three lines.

A new flight algorithm, protocol change, timing-sensitive task, or hardware behavior may need a full engineering note.

Depth should scale with risk, uncertainty, and future maintenance cost, not with a fixed word count.
