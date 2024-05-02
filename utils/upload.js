// import {GridFsStorage, Gridfs} from 'multer-gridfs-storage';
import pkg from 'multer-gridfs-storage';
const { GridFsStorage, Gridfs } = pkg;
import multer from 'multer';

const storage = new GridFsStorage({
    url:  `mongodb://shraddhag02017:Shr1301@ac-ccc0lfg-shard-00-00.euenhc1.mongodb.net:27017,ac-ccc0lfg-shard-00-01.euenhc1.mongodb.net:27017,ac-ccc0lfg-shard-00-02.euenhc1.mongodb.net:27017/?ssl=true&replicaSet=atlas-t6he0y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`,
    // options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

            return {
                bucketName: "photos",
                filename: `${Date.now()}-blog-${file.originalname}`
            }
        }

});
export default multer({storage});