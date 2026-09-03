# Au Beau Jeu website Project Rules

## Git, Branching & Workflow Rules
- **Use Dedicated Branches**: When working on any new feature, bugfix, or refactor, you **MUST** create or switch to a dedicated branch. Never work or commit directly on `main` or `master`.
- **Keep Branches Up-to-Date**: Before starting new work and before wrapping up a feature, ensure your branch is fully up-to-date with `main` (e.g., by merging or rebasing `main` into your branch). If you are ever unsure, always ask the user for guidance.
- **Branch Naming Conventions**: Use clear, descriptive branch names prefixed by their purpose:
  - `feat/feature-name` or `feature/feature-name` for new features
  - `fix/bug-description` for bug fixes
  - `refactor/refactor-description` for code improvements
  - `chore/task-name` for auxiliary tasks (e.g., dependency updates)
- **Conventional Commits**: Write clean, semantic commit messages following the Conventional Commits specification:
  - Format: `<type>: <description>` (e.g., `feat: add user profile endpoint`, `fix: resolve keyerror in event validator`).
- **Pre-Commit Quality Check**: Before declaring a task done or prompting for a commit/PR:
  - You **MUST** run all tests locally to ensure no regressions.
  - You **MUST** verify the 80% overall test coverage target is maintained.
- **Automatic Pull Request Creation**: After pushing a new branch to GitHub, you **MUST** automatically create a Pull Request using the GitHub CLI (`gh pr create`), providing a clear title and detailed description of the changes.
- **Never Commit Secrets**: Double-check to ensure no credentials, tokens, local `.env` configurations, or temp files are staged or committed.
