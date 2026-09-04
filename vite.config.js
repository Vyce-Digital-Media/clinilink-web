import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

/**
 * Vite plugin that generates static route directories and 404 fallback at build time.
 * This guarantees that direct URL visits (e.g. /solutions or /platform) return HTTP 200
 * on ANY static hosting server (Apache, Nginx, Hostinger, cPanel, S3, Netlify, Cloudflare)
 * even if .htaccess is missing or AllowOverride is disabled.
 */
function staticRoutesPlugin() {
  const routes = [
    {
      path: 'platform',
      title: 'Platform Overview — CliniLink Health',
      description: 'Explore the CliniLink retention platform. Turn participant signals into clear, automated retention workflows for clinical trial teams.',
    },
    {
      path: 'solutions',
      title: 'Solutions for Sponsors & CROs — CliniLink Health',
      description: 'Proactive retention intelligence and workflow automation for CROs, sponsors, and research sites.',
    },
    {
      path: 'retention-intelligence',
      title: 'Retention Intelligence — CliniLink Health',
      description: 'Spot clinical trial disengagement early with predictive signals and automated intervention workflows.',
    },
    {
      path: 'resources',
      title: 'Resources & Insights — CliniLink Health',
      description: 'Clinical trial retention research, industry insights, and operational guides for trial continuity.',
    },
    {
      path: 'about',
      title: 'About Us — CliniLink Health',
      description: 'Learn about CliniLink’s mission to help clinical trial teams move from reactive follow-up to proactive retention management.',
    },
    {
      path: 'contact',
      title: 'Contact Us — CliniLink Health',
      description: 'Get in touch with the CliniLink team for study consultations, enterprise trials, or product demonstrations.',
    },
  ]

  return {
    name: 'generate-static-routes',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexHtmlPath = path.join(distDir, 'index.html')

      if (!fs.existsSync(indexHtmlPath)) {
        console.warn('[staticRoutesPlugin] dist/index.html not found, skipping route generation.')
        return
      }

      const originalHtml = fs.readFileSync(indexHtmlPath, 'utf-8')

      // 1. Generate physical folder and index.html for each route
      routes.forEach((route) => {
        const routeDir = path.join(distDir, route.path)
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true })
        }

        let customizedHtml = originalHtml
        // Replace or inject title
        customizedHtml = customizedHtml.replace(
          /<title>.*?<\/title>/i,
          `<title>${route.title}</title>\n    <meta name="description" content="${route.description}" />`
        )

        fs.writeFileSync(path.join(routeDir, 'index.html'), customizedHtml, 'utf-8')
      })

      // 2. Generate 404.html fallback (used by GitHub Pages, Netlify, Cloudflare, S3, etc.)
      const notFoundHtml = originalHtml.replace(
        /<title>.*?<\/title>/i,
        '<title>Page Not Found — CliniLink Health</title>'
      )
      fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8')

      console.log(`[staticRoutesPlugin] Successfully generated ${routes.length} static route entry points and 404.html fallback in dist/`)
    },
  }
}

export default defineConfig({
  plugins: [react(), staticRoutesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
