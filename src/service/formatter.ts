import { Issue } from "../model/format/Issue.js";
import { MergeRequest } from "../model/format/MergeRequest.js";
import { Note } from "../model/format/Note.js";

export class Formatter {
    
    public formatIssueNotes(data: any): Note[] {
        if(!Array.isArray(data)) {
            console.error("Notes are not distributed as an array !");
            return [];
        }

        return Array.from(data).map(note => new Note(note));
    }

    public formatIssueMergeRequests(data: any): MergeRequest[] {
        if(!Array.isArray(data)) {
            console.error("Merge requests are not distributed as an array !");
            return [];
        }

        return Array.from(data).map((mr: any) => new MergeRequest(mr));
    }

    public formatIssue(data: object, mrs: MergeRequest[], notes: Note[]): Issue {
        return new Issue(data, mrs, notes);
    }

}
