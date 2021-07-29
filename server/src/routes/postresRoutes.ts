import { Router } from 'express';
import postresController from '../controllers/postresController'

class PostresRoutes {
    public router: Router = Router();

    constructor() {
            this.config();
    }

    config(): void {
        this.router.get('/', postresController.list);
        this.router.get('/:id', postresController.getOne);
        this.router.post('/', postresController.create);
        this.router.delete('/:id', postresController.delete);
        this.router.put('/:id', postresController.update);
    }
}

const postresRoutes = new PostresRoutes();
export default postresRoutes.router;