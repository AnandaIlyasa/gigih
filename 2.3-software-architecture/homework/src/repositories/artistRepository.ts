import Artist from "../models/artist";

export default class ArtistRepository {
    private allArtists: Artist[];
    private idCounter: number;
    
    constructor(allArtists: Artist[]) {
        this.allArtists = allArtists;
        this.idCounter = allArtists.length;
    }

    create(data: any) {
        const newArtist: Artist = new Artist(this.idCounter++, data.name);
        this.allArtists.push(newArtist);
    }

    read(id: number): Artist {
        const artist: Artist | undefined = this.allArtists.find((artistItem) => artistItem.id === id);
        if(artist === undefined) {
            throw new Error(`artist with id ${id} is not found`);
        }
        return artist;
    }
    
    update(id: number, data: any) {
        const foundId: number = this.allArtists.findIndex((artist) => artist.id === id);
        if(foundId === -1) {
            throw new Error(`artist with id ${id} is not found`);
        }
        const newArtist: Artist = new Artist(id, data.name);
        this.allArtists[foundId] = newArtist;
    }

    delete(id: number) {
        const foundId: number = this.allArtists.findIndex((artist) => artist.id === id);
        if(foundId === -1) {
            throw new Error(`artist with id ${id} is not found`);
        }
        this.allArtists.filter((artist) => artist.id !== id);
    }

    readAll(): Artist[] {
        return this.allArtists;
    }
}