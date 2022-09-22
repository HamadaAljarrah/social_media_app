import { Request } from "express"
import multer from "multer"

type destinationCallback = (error: Error | null, destination: string) => void




class PostServices {

    uploadImage(path: string, fileName: string) {
        const storage = multer.diskStorage({
            destination: (req: Request, file: Express.Multer.File, callback: destinationCallback) => {
                callback(null, 'Uploads')
            },
            filename: (req: Request, file: Express.Multer.File, callback: destinationCallback) => {
                callback(null, 'file-' + Date.now() + '-' + file.originalname)
            }
        })
        return multer({ storage: storage }).single('avatar');        
    }


}

export default new PostServices