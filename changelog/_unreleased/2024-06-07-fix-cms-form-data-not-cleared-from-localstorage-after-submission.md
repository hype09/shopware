---
title: Fix cms form data not cleared from localstorage after submission
issue: 00000
author: Paik Paustian
author_email: mail@paik.dev
author_github: hype09
---
# Storefront
* Fixed issue where CMS form data was not cleared from local storage after submission.
* The `FormCmsHandler` now resets the form after it was successfully submitted via AJAX.
* The `FormPreserverPlugin` now clears forms on both `submit` and `reset` form events.
