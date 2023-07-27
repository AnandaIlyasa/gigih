import { Request, Response } from "express";
import ProductService from "../services/productService";

export default class ProductController {
    
    static async getAllProductsByVideoId(req: Request, res: Response) {
        const videoId = req.params.videoId;
        try {
            const foundProducts = await ProductService.readAllByVideoId(videoId);
            res.status(200).json(foundProducts);
        } catch (error) {
            res.status(500).send(`can not get all products in video with id ${videoId}: ${error}`);
            
        }
    }
}
