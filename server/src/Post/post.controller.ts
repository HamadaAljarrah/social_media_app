import { Request, Response } from "express";
import multer from "multer";

import PostServices from "./post.service";


class PostController {

    async uploadFile(req: Request, res: Response) {
        const upload = PostServices.uploadImage('Uploads', 'avatar');
        upload(req, res, (error) => {
            if (error instanceof multer.MulterError) {
                return res.status(500).json({ success: false, message: error.message })
            } else if (error) {
                return res.status(500).json({ success: false, message: error.message })
            }            
            return res.status(200).json({ success: true, message: 'Image is uploaded', data: req.file })
        })
    }

}


export default new PostController;