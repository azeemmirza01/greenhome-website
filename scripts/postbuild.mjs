import { copyFileSync, existsSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const outDir = join(root, 'out')
const htaccessSource = join(root, 'public', '.htaccess')

if (!existsSync(outDir)) {
  console.error('postbuild: missing out/ — run next build first')
  process.exit(1)
}

if (!existsSync(htaccessSource)) {
  console.error('postbuild: missing public/.htaccess')
  process.exit(1)
}

copyFileSync(htaccessSource, join(outDir, '.htaccess'))
copyFileSync(htaccessSource, join(outDir, 'htaccess.txt'))

const required = ['index.html', 'quote/index.html']
const servicesDir = join(outDir, 'services')

if (existsSync(servicesDir)) {
  for (const slug of readdirSync(servicesDir)) {
    required.push(`services/${slug}/index.html`)
  }
}

const missing = required.filter((rel) => !existsSync(join(outDir, rel)))
if (missing.length > 0) {
  console.error('postbuild: missing required deploy files:')
  missing.forEach((file) => console.error(`  - ${file}`))
  process.exit(1)
}

const serviceFolders = existsSync(servicesDir)
  ? readdirSync(servicesDir).map((slug) => `  - services/${slug}/`)
  : []

writeFileSync(
  join(outDir, 'UPLOAD-README.txt'),
  [
    'Upload ALL files and folders inside out/ to Hostinger public_html.',
    '',
    'Required folders (must upload the folders, not only index.html):',
    '  - quote/',
    ...serviceFolders,
    '',
    'Set .htaccess: upload htaccess.txt and rename to .htaccess',
    '',
    'Test URLs:',
    '  https://greenhomesnw.co.uk/quote/',
    ...serviceFolders.map((line) => {
      const slug = line.trim().replace('  - services/', '').replace('/', '')
      return `  https://greenhomesnw.co.uk/services/${slug}/`
    }),
    '',
  ].join('\n'),
)

console.log('postbuild: copied .htaccess, htaccess.txt, UPLOAD-README.txt')
console.log(`postbuild: verified ${required.length} required pages in out/`)
