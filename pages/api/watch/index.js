import dbConnect from '../../../db/dbconnect'

import watch from '../../../modals/watch'

dbConnect();


export default async (req, res) => {

    const { method } = req

    switch (method) {

        case "GET":
            try {

                const watches = await watch.find({})
                res.status(200).json({ success: true, watches })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case "POST":
            try {

                const singlewatch = await watch.create(req.body)
                res.status(200).json({ success: true, watch: singlewatch })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case "PUT":
            try {

                const singlewatch = await watch.updateOne(req.body)
                res.status(200).json({ success: true, watch: singlewatch })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }


}