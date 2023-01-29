import dbConnect from '../../../db/dbconnect'

import stocks from '../../../modals/stocks'

dbConnect();


export default async (req, res) => {

    const { method } = req

    switch (method) {

        case "GET":
            try {

                const stock = await stocks.find({})
                res.status(200).json({ success: true, stock })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case "POST":
            try {

                const singlestock = await stocks.create(req.body)
                res.status(200).json({ success: true, order: singlestock })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }


}