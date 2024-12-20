import { fileURLToPath } from 'url';

export default {
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    'public': fileURLToPath(new URL('./public', import.meta.url)),
    'assets': fileURLToPath(new URL('./public/assets', import.meta.url)),
    'images': fileURLToPath(new URL('./public/images', import.meta.url)),
    'style': fileURLToPath(new URL('./public/style', import.meta.url)),
  }
}
