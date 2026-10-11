# XFact Research

Static website for XFact Research. Files are served directly; no build or package installation is required.

## Deployment with a private GitHub repository

1. In Netlify, select Add new project, then Import an existing project.
2. Connect GitHub and select lclarete-test/xfactresearch.
3. Choose main. Leave the build command empty. Use . as the publish directory.
4. Deploy, then add xfactresearch.com in Domain management.
5. In GoDaddy, open the domain DNS settings. Set the apex A record named @ to 75.2.60.5. Set the www CNAME to the exact project hostname returned by Netlify, ending in netlify.app.
6. Remove conflicting parking records for @ and www only. Preserve MX, email TXT and other records.
7. Wait for DNS verification and HTTPS provisioning.

The _redirects file supports direct links to application routes.

## GitHub Pages alternative

GitHub Free requires a public repository. GitHub Pro also supports private repositories. Enable Pages in repository Settings. Choose Deploy from a branch, main, / (root). Add xfactresearch.com as the custom domain.

GoDaddy DNS for GitHub Pages:
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
CNAME www lclarete-test.github.io

Use one hosting provider's DNS records at a time.

## Current limitations

The contact form is a demonstration and does not submit leads. The contact email is hello@expectresearch.com, as requested; it differs from xfactresearch.com and should be confirmed before launch. Some internal Arabic and Mandarin copy remains English. The site uses a client-side routing bundle. Stock photography credits are in assets/photo-credits.txt.

## References

https://docs.netlify.com/start/quickstarts/deploy-from-repository/
https://docs.netlify.com/manage/domains/get-started-with-domains/
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
