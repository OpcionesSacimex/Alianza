const address = (window.location.host).split(":")[0]
const port = 8000
export const URLBackend = `http://${address}:${port}/backend`

export const URLStorage = `http://${address}:${port}/storage`
