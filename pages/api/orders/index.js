import dbConnect from '../../../db/dbconnect'

import orders from '../../../modals/order'

dbConnect();


export default async (req, res) => {

    const { method } = req

    switch (method) {

        case "GET":
            try {

                const order = await orders.find({})
                res.status(200).json({ success: true, order })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case "POST":
            try {

                const singleorder = await orders.create(req.body)
                res.status(200).json({ success: true, order: singleorder })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }


}