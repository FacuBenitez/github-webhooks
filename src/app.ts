import { envs } from "./config";
import express from 'express'
import { GithubController } from "./presentation/github/controller";
import { GithubSha256Middleware } from "./presentation/middlewares/github-sha256";

(async() => {
    main();
})();



    async function main() {

        const controller = new GithubController()

        const app = express();
        app.use( express.json() )
        app.use( GithubSha256Middleware.verifySignature )

        app.post( '/api/github', controller.webHookHandler )



        app.listen( envs.PORT, () => console.log(`Server running on port ${envs.PORT}`) )

    }