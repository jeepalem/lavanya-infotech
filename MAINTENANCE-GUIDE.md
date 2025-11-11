# Maintenance Page Usage Guide

This guide explains how to use the maintenance page when you need to take your website offline temporarily.

---

## 📋 What's Included

The [maintenance.html](maintenance.html) page includes:

- ✅ **Professional Design** - Matches your brand with animated gradients
- ✅ **Animated Background** - Floating particles for visual appeal
- ✅ **Auto-Refresh** - Checks every 60 seconds if site is back online
- ✅ **Countdown Timer** - Optional countdown (commented out by default)
- ✅ **Contact Information** - Emergency contact details displayed
- ✅ **Responsive Design** - Works on all devices
- ✅ **Progress Bar** - Visual indication of ongoing maintenance
- ✅ **SEO Protection** - `noindex, nofollow` to prevent search engine indexing

---

## 🚀 How to Use

### Method 1: GitHub Pages (Recommended)

**When you need to enable maintenance mode:**

1. **Rename your homepage:**
   ```bash
   # Rename index.html to index-backup.html
   git mv index.html index-backup.html

   # Rename maintenance.html to index.html
   git mv maintenance.html index.html

   # Commit and push
   git add .
   git commit -m "chore: enable maintenance mode"
   git push origin main
   ```

2. **Your site will now show the maintenance page**
   - GitHub Pages will automatically redeploy
   - Visitors will see the maintenance message
   - Auto-refresh will check every 60 seconds

**When maintenance is complete:**

3. **Restore your homepage:**
   ```bash
   # Rename back to original
   git mv index.html maintenance.html
   git mv index-backup.html index.html

   # Commit and push
   git add .
   git commit -m "chore: disable maintenance mode - site restored"
   git push origin main
   ```

---

### Method 2: Using .htaccess (Traditional Hosting)

**For Apache-based hosting (cPanel, traditional hosts):**

1. **Create/Edit .htaccess in root directory:**
   ```apache
   # Enable maintenance mode
   RewriteEngine On
   RewriteCond %{REQUEST_URI} !^/maintenance.html$
   RewriteCond %{REQUEST_URI} !^/images/
   RewriteCond %{REQUEST_URI} !^/assets/
   RewriteCond %{REMOTE_ADDR} !^YOUR\.IP\.ADDRESS\.HERE$
   RewriteRule ^(.*)$ /maintenance.html [R=307,L]
   ```

2. **Replace `YOUR.IP.ADDRESS.HERE` with your IP** (optional - allows you to access site)
   - Find your IP: https://whatismyipaddress.com

3. **Upload .htaccess to server**

**To disable maintenance mode:**
- Delete the .htaccess file or comment out the redirect rules

---

### Method 3: Netlify/Vercel

**Netlify:**

1. Go to your site dashboard
2. Navigate to "Settings" → "Build & deploy"
3. Enable "Maintenance mode" (if available)
4. Or use the file renaming method (Method 1)

**Vercel:**

1. Create a new deployment with maintenance.html as index
2. Or use environment variables to conditionally show maintenance page

---

## ⚙️ Customization Options

### 1. Enable Countdown Timer

**To show a countdown timer:**

1. Open `maintenance.html`
2. Find this section (around line 231):
   ```html
   <!-- <div class="countdown" id="countdown">
   ```

3. Remove the `<!--` at the start and `-->` at the end to uncomment

4. Find the JavaScript section (around line 430):
   ```javascript
   // Uncomment to enable countdown timer
   /*
   const maintenanceEndTime = new Date().getTime() + (24 * 60 * 60 * 1000);
   ```

5. Uncomment the countdown code

6. **Set your maintenance end time:**
   ```javascript
   // Example: Maintenance ends in 2 hours
   const maintenanceEndTime = new Date().getTime() + (2 * 60 * 60 * 1000);

   // Example: Maintenance ends at specific date/time
   const maintenanceEndTime = new Date('2025-01-15 10:00:00').getTime();
   ```

### 2. Change Auto-Refresh Interval

**Default:** Checks every 60 seconds

**To change:**
```javascript
const AUTO_REFRESH_INTERVAL = 60000; // 60 seconds

// Change to 30 seconds:
const AUTO_REFRESH_INTERVAL = 30000;

// Change to 5 minutes:
const AUTO_REFRESH_INTERVAL = 300000;
```

### 3. Update Contact Information

Edit the contact section:
```html
<div class="contact-info">
    <h3>Need Immediate Assistance?</h3>
    <div class="contact-item">
        <span>📧</span>
        <span>Email: <a href="mailto:info@lavanyainfotechltd.com">info@lavanyainfotechltd.com</a></span>
    </div>
    <!-- Add phone number if needed -->
    <div class="contact-item">
        <span>📱</span>
        <span>Phone: <a href="tel:+441234567890">+44 1234 567890</a></span>
    </div>
</div>
```

### 4. Customize Maintenance Message

Edit the "What's Happening?" section:
```html
<div class="info-box">
    <h2>What's Happening?</h2>
    <p>✨ Performance improvements and optimizations</p>
    <p>🔧 System updates and security patches</p>
    <!-- Add your own messages -->
    <p>📊 Database maintenance</p>
    <p>🎨 New design improvements</p>
</div>
```

### 5. Add Social Media Links

Uncomment the social links section:
```html
<!-- Remove the comment tags -->
<div class="social-links">
    <a href="https://linkedin.com/company/yourcompany" class="social-link" aria-label="LinkedIn">💼</a>
    <a href="https://twitter.com/yourcompany" class="social-link" aria-label="Twitter">🐦</a>
</div>
```

---

## 📝 Testing

**Before going live with maintenance page:**

1. **Test Locally:**
   ```bash
   # Open maintenance.html in browser
   open maintenance.html
   # or
   start maintenance.html
   ```

2. **Check:**
   - Logo displays correctly
   - Contact email link works
   - Page is responsive on mobile
   - Animations are smooth
   - Auto-refresh notice appears

3. **Test Auto-Refresh (Optional):**
   - Open browser console (F12)
   - Should see: "Still in maintenance mode..." every 60 seconds

---

## 🔧 Troubleshooting

### Logo Not Showing

**Issue:** Logo image doesn't display

**Solution:**
```html
<!-- Check the logo path in maintenance.html -->
<img src="images/LavanyaInfotechLogo.png" alt="Lavanya Infotech Limited" class="logo">

<!-- Ensure the path is correct relative to maintenance.html location -->
```

### Favicon Not Showing

**Issue:** Favicon doesn't display

**Solution:** Ensure favicon files exist in `assets/icons/`

### Auto-Refresh Not Working

**Issue:** Page doesn't redirect when site is back

**Solution:**
- Check browser console for errors
- Ensure `index.html` exists in same directory
- Clear browser cache

### Countdown Timer Not Showing

**Issue:** Timer doesn't appear

**Solution:**
- Uncomment both HTML and JavaScript sections
- Check browser console for errors
- Verify `maintenanceEndTime` is set correctly

---

## 📊 Best Practices

### When to Use Maintenance Mode

✅ **Good Reasons:**
- Major site updates or redesigns
- Database migrations
- Server upgrades
- Security patches requiring downtime
- Infrastructure changes

❌ **Avoid Using For:**
- Minor content updates (use staging environment)
- Small bug fixes (deploy directly)
- Regular business hours (schedule for off-hours)

### Communication

**Before Maintenance:**
- Announce maintenance window via email
- Post on social media
- Add notice to website 24-48 hours before

**During Maintenance:**
- Keep maintenance page updated
- Provide realistic completion time
- Share contact for urgent matters

**After Maintenance:**
- Test thoroughly before disabling maintenance mode
- Announce completion
- Monitor for issues

### Timing

**Best Times for Maintenance:**
- Late night / early morning (2 AM - 6 AM local time)
- Weekends (low traffic times)
- Avoid peak business hours
- Consider international audience time zones

---

## 📋 Maintenance Checklist

Before enabling maintenance mode:

- [ ] Backup current website files
- [ ] Test maintenance page locally
- [ ] Verify logo and images display
- [ ] Check contact information is current
- [ ] Set appropriate countdown time (if using)
- [ ] Announce maintenance to users
- [ ] Schedule during low-traffic hours

During maintenance:

- [ ] Monitor maintenance page accessibility
- [ ] Track progress of maintenance work
- [ ] Keep stakeholders updated

After maintenance:

- [ ] Test all website functionality
- [ ] Verify forms work correctly
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Disable maintenance mode
- [ ] Announce site restoration
- [ ] Monitor for issues

---

## 🆘 Emergency Rollback

If you need to quickly disable maintenance mode:

**GitHub Pages:**
```bash
git revert HEAD
git push origin main
```

**Traditional Hosting:**
- Delete or rename .htaccess file
- Or rename index.html files back

---

## 📞 Support

For issues with the maintenance page:

**Email:** info@lavanyainfotechltd.com

Include:
- Description of the issue
- Browser and device information
- Screenshots (if applicable)
- Steps taken so far

---

**Last Updated:** January 11, 2025

**File Location:** [maintenance.html](maintenance.html)
