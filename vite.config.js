import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: null,
      includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Parcours Numérique',
        short_name: 'ParcoursNum',
        description: "Plateforme de formation numérique pour stagiaires allophones",
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        // Le nouveau service worker prend le contrôle immédiatement (au lieu
        // d'attendre que tous les onglets soient fermés), pour que les
        // stagiaires reçoivent les mises à jour de contenu (nouveaux
        // modules...) sans devoir vider leur cache manuellement.
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.href.includes('firestore.googleapis.com') || url.href.includes('identitytoolkit.googleapis.com'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'firebase-cache',
              networkTimeoutSeconds: 4,
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      },
      devOptions: { enabled: true }
    })
  ],
  server: { host: true, port: 5173 },
  build: {
    rollupOptions: {
      output: {
        // Sépare les grosses bibliothèques externes du code de l'application.
        // Avantage concret : à chaque mise à jour du site, le navigateur n'a
        // besoin de re-télécharger que le code qui a vraiment changé — les
        // bibliothèques (React, Firebase, Dexie...) restent en cache tant
        // qu'elles ne changent pas elles-mêmes, au lieu d'être mélangées
        // avec le code applicatif dans un seul gros fichier.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'vendor-react'
            if (id.includes('firebase')) return 'vendor-firebase'
            if (id.includes('dexie') || id.includes('zustand')) return 'vendor-db'
          }
        }
      }
    }
  }
})
