import { Request, Response } from 'express';
import pool from '../database';

class PostresController {
    public async list(req: Request, res: Response){
        const postres = await pool.query('SELECT * FROM producto');
        res.json(postres);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const postres = await pool.query('SELECT * FROM producto WHERE id = ?', [id]);
        console.log(postres);

        if(postres.length > 0){
            return res.json(postres[0]);
        }
        res.status(404).json({text: 'El postre no existe'});
      
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO producto set?', [req.body]);
        res.json({text: 'Se agregó el postre'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id }= req.params;
        await pool.query('DELETE FROM producto WHERE id = ?', [id])
        res.json({message: 'El postre se eliminó'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id }= req.params;
        await pool.query('UPDATE producto set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'El postre se actualizó'});
    }
}

const postresController =  new PostresController();
export default postresController;