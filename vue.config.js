module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/chez-tontons/' // Assurez-vous que ce chemin correspond au nom de votre dépôt GitHub
    : '/'
};