import { error } from 'console'
import {NextApiRequest, NextApiResponse} from 'next'
import skillshandler from '../../handlers/skills'

export default async function (req: NextApiRequest, res: NextApiResponse){
    try {
        return await skillshandler(req,res)
    } catch{
        console.error(error)
        res.status(500).json({message: 'Internal Server Error'})
    }
}