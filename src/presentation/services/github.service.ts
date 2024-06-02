import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";



export class GithubService {


    constructor() {
    }

    onStar( payload: GitHubStarPayload ):string {


        const {starred_at} = payload
        

        return `starred at ${starred_at}`
    }

    onIssue( payload: GitHubIssuePayload ):string {


        const {action, issue} = payload

        if( action === 'opened' ) {

            return ` an issue was opened${issue.title} `
        }

        if( action === 'closed' ) {
            return ` an issue was closed${issue.title} `
        }

        if( action === 'reopened' ) {   
            return ` an issue was reopened${issue.title} `
        }

    
    
    return `Unhandled issue for the issue event ${action}`
    }


}