
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


        case 'PUT':

            try {
                const watches = await watch.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true

                })
                if (!watches) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, watches })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case 'DELETE':

            try {
                const watches = await watch.deleteOne({ _id: id })
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