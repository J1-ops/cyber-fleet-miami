# Cyber Fleet Miami LLC — Marketing Site

Static marketing website for **Cyber Fleet Miami LLC**. No build step, no backend — open `index.html` in a browser or upload the folder contents to Network Solutions hosting.

## Open locally

1. Open a file browser to this folder: `cyber-fleet-miami-site/`
2. Double-click **`index.html`**, or drag it into Chrome / Firefox / Edge / Safari.
3. Optional — serve over HTTP from this folder:

```bash
cd cyber-fleet-miami-site
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser. Stop the server with `Ctrl+C` when finished.

## Upload to Network Solutions

Upload the **contents** of this folder (not necessarily the outer folder name itself) into your site’s web root so the live URL serves `index.html`.

### File Manager (cPanel / Network Solutions control panel)

1. Log in to your Network Solutions account and open **Website** / **Hosting** → **File Manager**.
2. Navigate to `public_html` or `www` (whichever is your document root).
3. Upload these files and folders into that root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (optional — not required for the site to work)
   - `assets/` (entire folder, including `logo.svg` and `favicon.svg`)
4. Confirm `index.html` is at the root of `public_html` / `www`, not nested inside another folder.
5. Visit your domain to verify the site loads.

### FTP / SFTP

1. Get FTP credentials from Network Solutions (hostname, username, password, port).
2. Connect with FileZilla, Cyberduck, or similar.
3. Navigate to `public_html` or `www`.
4. Upload all site files while preserving relative paths (`assets/` must stay as a subfolder next to `index.html`).

### After upload checklist

- [ ] `https://your-domain/` shows the landing page
- [ ] Logo and favicon appear
- [ ] Mobile menu works
- [ ] Email / phone links work
- [ ] Contact form opens a mail draft to `juarez1980md@gmail.com`

## File list

| Path | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `styles.css` | Neon Miami theme |
| `script.js` | Mobile nav + mailto form helper |
| `assets/logo.svg` | Brand mark + wordmark |
| `assets/favicon.svg` | Browser tab icon |
| `README.md` | This file |

## Company facts (on site)

- Legal name: Cyber Fleet Miami LLC  
- Florida LLC doc #: L26000474040  
- EIN: 42-5120508  
- Email: juarez1980md@gmail.com  
- Phone: (305) 607-0769  
- Address (footer): 1480 SW 66th Terrace, Plantation, FL 33317  

© 2026 Cyber Fleet Miami LLC
