export class Quote {
    isDescriptionShown: boolean;
    id: number;
    name: string;
    quote: string;
    author: string;
    datePosted:Date;
    upVotes: number;
    downVotes: number;

    constructor( id:number, name:string, quote:string, author:string, datePosted:Date, upVotes:number, downVotes:number){
        this.id = id;
        this.name = name
        this.quote = quote
        this.author = author
        this.datePosted = datePosted
        this.upVotes =upVotes
        this.downVotes = downVotes
            this.isDescriptionShown = false;

    }
}