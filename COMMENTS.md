<!-- Project Comments Go Here -->

Had issues with ts-node. For sake of time, replaced with tsx.

No typescript-eslint - installed.

Start with button and fetching.

No need for global state - can use caching.

Install swr - simplest.

Create hook for fetching applications.

> Added /types dir with TApplication (etc) - ordinarily would expect types generated from OpenAPI as package

"Fetching" currently in Application.tsx - no need to move. Will add button there, since related functionality.

Prefer semantic list for list of applications - can later extend with WCAG compliant list support, or grid support and navigation if required.

Single Application using margin below - can move to gap in Application, using flex column. Better reuse.