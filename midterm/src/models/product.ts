export default class Product {
    id: string;
    productLink: string;
    title: string;
    price: number;
    videoId: string;
    
    constructor(id: string, productLink: string, title: string, price: number, videoId: string) {
        this.id = id;
        this.productLink = productLink;
        this.title = title;
        this.price = price;
        this.videoId = videoId;
    }
}