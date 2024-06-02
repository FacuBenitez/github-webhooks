import { envs } from "../../config";





export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL

    constructor(

    ) {}

    
    async notify( message: string ) {


        const body = {
            content: message,
            embeds: [
                {
                    image: {
                        url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN29hd2d0dWdpN2N5dngwNms2NGpyazFrMXJrc3EwbnU0aHZ6NDVmbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZubZqIeSsZ60t0ID9l/giphy-downsized-large.gif"
                     }
                }
            ]
        }

        const resp = await fetch( this.discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        })

        if ( !resp.ok ) throw new Error( `Error ${resp.status} ${resp.statusText}` )

        return true
    }

}