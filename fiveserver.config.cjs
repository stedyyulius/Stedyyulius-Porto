module.exports = {
    port: 8081,
    proxy: { '/': 'http://localhost:8080' },
    navigate: false
}