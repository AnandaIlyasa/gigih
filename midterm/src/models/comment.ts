export default class Comment {
    id: string;
    username: string;
    comment: string;
    timestamp: Date;
    videoId: string;

    constructor(id: string, username: string, comment: string, timestamp: Date, videoId: string) {
        this.id = id;
        this.username = username;
        this.comment = comment;
        this.timestamp = timestamp;
        this.videoId = videoId;
    }
}