export default function initMiddleware(middleware) {
    return (req, res) =>
        new Promise((resolve, reject) => {
        middleware(req, res, (result) => {
          if (result instanceof Error) {
            return reject(result)
          }
          return resolve(result)
        })
    })
}

//https://dev.to/meddlesome/nextjs-apis-validator-with-middleware-3njl : idea from website /dev.to