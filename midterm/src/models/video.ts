export default class Video {
    id: string;
    embedUrl: string;
    thumbnailUrl: string;
    
    constructor(id: string, embedUrl: string, thumbnailUrl: string) {
        this.id = id;
        this.embedUrl = embedUrl;
        this.thumbnailUrl = thumbnailUrl;
    }
}