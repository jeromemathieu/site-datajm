// Le site est déployé tel quel (statique) : tailwind.css est commité.
// Pour le régénérer après modification des fichiers HTML :
//   npx tailwindcss@3 -i tailwind-input.css -o tailwind.css --minify
// NB : pas de package.json à la racine, sinon Cloudflare Workers Builds
// tente une étape de build npm et le déploiement échoue.
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
    },
  },
};
