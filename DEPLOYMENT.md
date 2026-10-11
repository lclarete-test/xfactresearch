# XFact Research

Website published with GitHub Pages from the main branch and repository root. Custom domain: xfactresearch.com.

## GoDaddy DNS

Open the DNS settings for xfactresearch.com. Use these records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | lclarete-test.github.io |

Replace conflicting parking records for @ and www. Preserve all MX records, email TXT records and unrelated records. Use the default TTL.

GitHub Pages is enabled in Settings > Pages with main and / (root). Once DNS passes, enable Enforce HTTPS. No separate hosting purchase is required.

## Files and updates

Files are already built. No build command or package installation is required. Commit changes to main to trigger publication. CNAME contains the custom domain. The .nojekyll file disables Jekyll processing. The 404.html file provides the client-side application fallback.

## Current limitations

The contact form does not submit leads. Contact email is hello@expectresearch.com as requested. Some internal Arabic and Mandarin copy remains English. Photo credits are in assets/photo-credits.txt.

## Official instructions

https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
