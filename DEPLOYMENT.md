# Deployment Guide - Lavanya Infotech Limited

This guide provides comprehensive instructions for deploying the Lavanya Infotech website to various hosting platforms.

---

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [GitHub Pages Deployment](#github-pages-deployment-current)
- [Alternative Hosting Options](#alternative-hosting-options)
- [Post-Deployment Tasks](#post-deployment-tasks)
- [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Before deploying, ensure you have completed the following:

### 1. Generate Favicons

**IMPORTANT:** Generate favicons before first deployment!

```bash
# Navigate to the project directory
cd lavanya-infotech

# Read the favicon generation instructions
cat assets/icons/README-FAVICONS.md
```

**Quick Steps:**
1. Go to https://favicon.io/favicon-converter/
2. Upload `images/LavanyaInfotechLogo.png`
3. Download the generated ZIP file
4. Extract files to `assets/icons/`
5. Move `favicon.ico` to the root directory

### 2. Update Configuration Files

- [ ] Update sitemap.xml dates if content changed
- [ ] Verify CNAME file contains correct domain
- [ ] Check all internal links work correctly
- [ ] Test contact form (Formspree configuration)

### 3. Test Locally

```bash
# Start local server
npx http-server -p 8080 -o

# Test all pages
# - Navigate through all sections
# - Submit contact form (test mode)
# - Check mobile responsiveness
# - Test on different browsers
```

### 4. Optimize Assets

- [ ] Optimize images (use TinyPNG or Squoosh)
- [ ] Ensure logo is properly sized
- [ ] Check all files are in correct directories

### 5. Final Code Review

- [ ] All external links open in new tabs
- [ ] No console errors in browser
- [ ] All navigation links work
- [ ] Form validation works correctly
- [ ] Mobile menu hamburger functions

---

## GitHub Pages Deployment (Current)

The website is currently hosted on GitHub Pages with a custom domain.

### Initial Setup (Already Configured)

1. **Repository Settings:**
   - Go to repository Settings → Pages
   - Source: Deploy from `main` branch
   - Root directory: `/` (root)
   - Custom domain: `www.lavanyainfotechltd.com`
   - Enforce HTTPS: ✅ Enabled

2. **DNS Configuration:**
   - CNAME record pointing to GitHub Pages
   - Configured in your domain registrar

### Deployment Process

**Standard Deployment:**

```bash
# 1. Ensure you're on main branch
git checkout main

# 2. Stage all changes
git add .

# 3. Commit with descriptive message
git commit -m "feat: update website content and styling

- Add new project case study
- Update contact information
- Fix mobile navigation bug
- Optimize images for faster loading

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# 4. Push to GitHub
git push origin main
```

**GitHub Pages will automatically:**
- Detect the push to `main` branch
- Rebuild the site
- Deploy within 1-2 minutes

### Verify Deployment

```bash
# Check deployment status
# Visit: https://github.com/yourusername/lavanya-infotech/deployments

# Test live site
# Visit: https://www.lavanyainfotechltd.com

# Check for errors
# Open browser console (F12) and check for any errors
```

### Custom Domain Management

**Current Setup:**
- Domain: `www.lavanyainfotechltd.com`
- CNAME file in repository root

**To Change Domain:**

1. Update `CNAME` file with new domain
2. Configure DNS at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```
3. Wait for DNS propagation (up to 48 hours)
4. Enable HTTPS in repository settings

---

## Alternative Hosting Options

### Option 1: Netlify

**Advantages:**
- Continuous deployment from Git
- Free SSL certificates
- Built-in form handling (alternative to Formspree)
- Branch previews
- Fast global CDN

**Deployment Steps:**

1. **Sign up for Netlify:**
   - Go to https://netlify.com
   - Sign up with GitHub account

2. **Create New Site:**
   - Click "New site from Git"
   - Choose GitHub
   - Select `lavanya-infotech` repository

3. **Configure Build Settings:**
   ```
   Build command: (leave empty - static site)
   Publish directory: /
   ```

4. **Deploy:**
   - Click "Deploy site"
   - Site will be live in ~1 minute
   - Netlify provides temporary URL

5. **Add Custom Domain:**
   - Site settings → Domain management
   - Add custom domain: `www.lavanyainfotechltd.com`
   - Configure DNS as instructed by Netlify

6. **Enable HTTPS:**
   - Automatic with Let's Encrypt
   - Force HTTPS redirect (recommended)

**Form Handling on Netlify:**
```html
<!-- Update form in index.html -->
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact">
  <!-- Rest of form fields -->
</form>
```

---

### Option 2: Vercel

**Advantages:**
- Lightning-fast edge network
- Automatic deployments
- Free SSL
- Branch previews
- Analytics available

**Deployment Steps:**

1. **Sign up for Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project:**
   - Click "New Project"
   - Import from GitHub
   - Select `lavanya-infotech`

3. **Configure:**
   ```
   Framework Preset: Other
   Build Command: (leave empty)
   Output Directory: ./
   ```

4. **Deploy:**
   - Click "Deploy"
   - Site live in ~30 seconds

5. **Custom Domain:**
   - Project settings → Domains
   - Add `www.lavanyainfotechltd.com`
   - Configure DNS as instructed

---

### Option 3: Traditional Web Hosting (cPanel/FTP)

**Suitable For:** Shared hosting, VPS, dedicated servers

**Deployment Steps:**

1. **Prepare Files:**
   ```bash
   # Ensure all files are ready
   ls -la

   # Verify structure
   ├── index.html
   ├── css/
   ├── js/
   ├── images/
   ├── assets/
   └── other files...
   ```

2. **Upload via FTP:**
   - Use FileZilla, Cyberduck, or cPanel File Manager
   - Connect to your server
   - Upload all files to `public_html/` or `www/`

3. **Important Files:**
   ```
   ✅ index.html (must be in root)
   ✅ .htaccess (for Apache servers)
   ✅ robots.txt
   ✅ sitemap.xml
   ✅ All directories (css/, js/, images/, assets/)
   ```

4. **Create .htaccess (Apache Only):**
   ```apache
   # Force HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Force www
   RewriteCond %{HTTP_HOST} !^www\.
   RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Custom error pages
   ErrorDocument 404 /404.html

   # Enable compression
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
   </IfModule>

   # Browser caching
   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType image/png "access plus 1 year"
       ExpiresByType image/jpeg "access plus 1 year"
       ExpiresByType text/css "access plus 1 month"
       ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

5. **Test Deployment:**
   - Visit your domain
   - Check all pages load
   - Test form submission
   - Verify mobile responsiveness

---

## Post-Deployment Tasks

### 1. Submit to Search Engines

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property: `www.lavanyainfotechltd.com`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://www.lavanyainfotechltd.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add site
3. Submit sitemap

### 2. Set Up Monitoring

**Google Analytics (Optional):**
```html
<!-- Add to <head> of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Uptime Monitoring:**
- Use UptimeRobot (free): https://uptimerobot.com
- Monitor: `https://www.lavanyainfotechltd.com`

### 3. Performance Testing

**Run Lighthouse Audit:**
```bash
npm run test:lighthouse
```

**Or manually:**
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Generate report
4. Target scores: 90+ in all categories

**Test Speed:**
- PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com

### 4. Security Checks

**SSL Certificate:**
- Verify HTTPS is working
- Test at: https://www.ssllabs.com/ssltest/

**Headers:**
```bash
curl -I https://www.lavanyainfotechltd.com
```

**Check for:**
- ✅ `Strict-Transport-Security` header
- ✅ `X-Frame-Options` header
- ✅ `X-Content-Type-Options` header

### 5. Cross-Browser Testing

**Test on:**
- Chrome (Windows, Mac, Android)
- Firefox (Windows, Mac)
- Safari (Mac, iOS)
- Edge (Windows)

**Use Tools:**
- BrowserStack: https://www.browserstack.com
- LambdaTest: https://www.lambdatest.com

### 6. Mobile Testing

**Test on Real Devices:**
- iPhone (Safari)
- Android phone (Chrome)
- iPad/Tablet

**Or Use:**
- Chrome DevTools device mode
- Firefox Responsive Design Mode

---

## Troubleshooting

### Issue: Website Not Loading

**Check:**
1. DNS propagation: https://dnschecker.org
2. CNAME file in repository
3. GitHub Pages settings enabled
4. No build errors in GitHub Actions

**Solution:**
```bash
# Verify CNAME file
cat CNAME
# Should output: www.lavanyainfotechltd.com

# Check DNS
nslookup www.lavanyainfotechltd.com
```

### Issue: HTTPS Not Working

**Check:**
1. "Enforce HTTPS" enabled in GitHub Pages settings
2. DNS configured correctly
3. Certificate provisioning complete (can take 24-48 hours)

**Solution:**
- Wait for SSL certificate to be issued
- Try accessing with `http://` first, then enable HTTPS

### Issue: 404 Errors on Subpages

**Cause:** Missing files or incorrect paths

**Solution:**
```bash
# Verify all files exist
ls -R

# Check file paths in HTML
grep -r "href=" *.html
grep -r "src=" *.html
```

### Issue: Form Not Sending Emails

**Check:**
1. Formspree action URL is correct
2. Email address in Formspree is verified
3. No JavaScript errors in console

**Solution:**
```html
<!-- Verify form action -->
<form action="https://formspree.io/f/xdkgrnvg" method="POST">
```

### Issue: Favicon Not Showing

**Check:**
1. Favicon files exist in `assets/icons/`
2. `favicon.ico` in root directory
3. Clear browser cache

**Solution:**
```bash
# Verify files exist
ls assets/icons/
ls favicon.ico

# Force browser cache clear
# Chrome: Ctrl+Shift+Delete
```

### Issue: Images Not Loading

**Check:**
1. Image paths are correct (case-sensitive on Linux servers)
2. Images exist in `images/` directory
3. File permissions (755 for directories, 644 for files)

**Solution:**
```bash
# Check image paths
grep -r "src=" index.html

# Verify images exist
ls images/
```

### Issue: Slow Loading

**Solutions:**
1. Optimize images (TinyPNG, Squoosh)
2. Enable browser caching (.htaccess)
3. Use CDN for static assets
4. Minify CSS/JS files

**Quick Optimization:**
```bash
# Check file sizes
du -h images/*

# Images should be:
# - Logo: < 100KB
# - Icons: < 10KB each
```

---

## Emergency Rollback

If deployment breaks the site:

**GitHub Pages:**
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or hard reset (use with caution)
git reset --hard HEAD~1
git push origin main --force
```

**Netlify/Vercel:**
- Go to Deployments
- Click on previous successful deployment
- Click "Publish deploy"

---

## Contact for Support

If you encounter issues not covered in this guide:

**Email:** info@lavanyainfotechltd.com

**Include in your message:**
- Description of the issue
- Steps to reproduce
- Screenshots (if applicable)
- Browser/device information
- Any error messages

---

## Deployment Checklist Summary

Before final deployment:

- [ ] Favicons generated and in place
- [ ] All images optimized
- [ ] Local testing completed
- [ ] Mobile responsive verified
- [ ] Contact form tested
- [ ] All links checked
- [ ] Browser compatibility tested
- [ ] Git repository up to date
- [ ] CNAME file correct
- [ ] Sitemap updated

After deployment:

- [ ] Live site accessible
- [ ] HTTPS working
- [ ] Forms submitting correctly
- [ ] Sitemap submitted to search engines
- [ ] Analytics configured (if using)
- [ ] Monitoring set up
- [ ] Performance tested
- [ ] Cross-browser tested

---

**Last Updated:** January 11, 2025

**Maintained by:** Lavanya Infotech Limited
