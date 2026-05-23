# Deploying to GitHub Pages

This guide covers deploying your Astro portfolio to GitHub Pages.

## Prerequisites

- GitHub repository: `ddeveloper72.github.io`
- GitHub account with repository access
- Git installed locally

## Deployment Setup

### 1. Configure GitHub Pages Settings

1. Go to your GitHub repository: `https://github.com/ddeveloper72/ddeveloper72.github.io`
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
4. Click **Save**

### 2. Commit and Push Your Changes

```powershell
# Check status
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Add portfolio content and GitHub Pages deployment"

# Push to GitHub (assumes main branch)
git push origin main
```

### 3. Monitor Deployment

1. Go to **Actions** tab in your GitHub repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for both jobs (build and deploy) to complete (usually 2-3 minutes)
4. Once complete, your site will be live at: `https://ddeveloper72.github.io`

## What Happens During Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. **Build Job:**
   - Checks out your code
   - Installs Node.js 20
   - Installs dependencies (`npm ci`)
   - Builds your site (`npm run build`)
   - Uploads the `dist` folder as an artifact

2. **Deploy Job:**
   - Takes the build artifact
   - Deploys it to GitHub Pages
   - Makes it available at your GitHub Pages URL

## Triggering Deployments

Deployments trigger automatically when you:
- Push commits to the `main` branch
- Manually run the workflow from the Actions tab

## Troubleshooting

### Build Fails

**Check the Actions tab for errors:**
- Click on the failed workflow run
- Review the build logs
- Common issues:
  - TypeScript errors → Run `npm run build` locally first
  - Missing dependencies → Ensure `package.json` is committed
  - Astro check errors → Fix errors shown in build logs

**Test locally before pushing:**
```powershell
# Build locally to catch errors
npm run build

# Preview the built site
npm run preview
```

### 404 Not Found After Deployment

**Verify GitHub Pages settings:**
- Settings → Pages → Source must be "GitHub Actions"
- Check that deployment succeeded (green checkmark in Actions tab)
- Wait a few minutes for DNS propagation

**Check astro.config.mjs site URL:**
```javascript
site: 'https://ddeveloper72.github.io'  // Must match your GitHub Pages URL
```

### Assets Not Loading

**Verify base URL configuration:**
- For user/organization pages (`username.github.io`), base URL is `/`
- Your config is correct: `site: 'https://ddeveloper72.github.io'`

## Making Updates

After initial deployment, to publish changes:

```powershell
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build locally to verify
npm run build

# 4. Commit and push
git add .
git commit -m "Update portfolio content"
git push origin main

# 5. Deployment happens automatically
```

## Deployment Status Badge

Add this to your README.md to show deployment status:

```markdown
[![Deploy to GitHub Pages](https://github.com/ddeveloper72/ddeveloper72.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ddeveloper72/ddeveloper72.github.io/actions/workflows/deploy.yml)
```

## Configuration Files

### `.github/workflows/deploy.yml`
GitHub Actions workflow that builds and deploys your site.

### `astro.config.mjs`
Astro configuration with your site URL:
```javascript
site: 'https://ddeveloper72.github.io'
```

## Next Steps

After successful deployment:

1. **Verify your site:** Visit `https://ddeveloper72.github.io`
2. **Test all pages:** Navigate through projects, case studies, timeline, about, contact
3. **Check responsive design:** Test on mobile, tablet, desktop
4. **Validate links:** Ensure all external links work
5. **Monitor performance:** Use PageSpeed Insights or Lighthouse

## Custom Domain (Optional)

To use a custom domain (e.g., `duncanfalconer.com`):

1. **Configure DNS:**
   - Add CNAME record pointing to `ddeveloper72.github.io`
   
2. **Update GitHub Settings:**
   - Settings → Pages → Custom domain
   - Enter your domain
   - Enable "Enforce HTTPS"
   
3. **Update astro.config.mjs:**
   ```javascript
   site: 'https://duncanfalconer.com'
   ```

## Security

- Never commit sensitive data (API keys, credentials)
- The workflow uses GitHub's built-in tokens (no manual token setup needed)
- All permissions are scoped to the minimum required

## Resources

- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
