import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const source = join(root, 'public', '.htaccess')
const outDir = join(root, 'out')

if (!existsSync(source)) {
  console.error('postbuild: missing public/.htaccess')
  process.exit(1)
}

if (!existsSync(outDir)) {
  console.error('postbuild: missing out/ — run next build first')
  process.exit(1)
}

copyFileSync(source, join(outDir, '.htaccess'))
copyFileSync(source, join(outDir, 'htaccess.txt'))

console.log('postbuild: copied .htaccess and htaccess.txt into out/')
