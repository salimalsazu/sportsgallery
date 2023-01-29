
import dbConnect from '../../../db/dbconnect'

import watch from '../../../modals/watch'

dbConnect();

export default async (req, res) => {
    const { query: { id }, method } = req


    switch (method) {
        case 'GET':

            try {
                const watches = await watch.findById(id)
                if (!watches) {
                    res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, watches })

            } catch (error) {

                res.status(400).json({ success: false })

            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }






}