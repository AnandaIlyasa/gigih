export default class Song {
    id: number;
    title: string;
    artistIds: number[];
    constructor(id: number, title: string, artistIds: number[]) {
        this.id = id;
        this.title = title;
        this.artistIds = artistIds;
    }
}