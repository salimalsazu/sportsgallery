import dbConnect from '../../../db/dbconnect'

import cart from '../../../modals/cart'

dbConnect();


export default async (req, res) => {

    const { method } = req

    switch (method) {

        case "GET":
            try {

                const carts = await cart.find({})
                res.status(200).json({ success: true, carts })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case "POST":
            try {

                const singlecart = await cart.create(req.body)
                res.status(200).json({ success: true, order: singlecart })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }


}