# Deployment

GitHub Pages publishes main from the repository root. Custom domain: xfactresearch.com.

## DNS configuration

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | lclarete-test.github.io |

Preserve email and unrelated DNS records. Enable Enforce HTTPS in Settings > Pages when the certificate is available.

## Updates

Commit the built static files to main. No build command or package installation is required. CNAME sets the domain, .nojekyll disables Jekyll, and 404.html provides the client application fallback.

## Implementation notes

The contact form currently does not submit leads. The contact email is hello@expectresearch.com. Some internal Arabic and Mandarin copy remains English. Photo credits: assets/photo-credits.txt.
