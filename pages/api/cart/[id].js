
import dbConnect from '../../../db/dbconnect'

import cart from '../../../modals/cart'

dbConnect();

export default async (req, res) => {
    const { query: { id }, method } = req


    switch (method) {
        case 'GET':

            try {
                const carts = await cart.findById(id)
                if (!carts) {
                    res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, carts })

            } catch (error) {

                res.status(400).json({ success: false })

            }
            break;

        case 'PUT':

            try {
                const carts = await cart.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true

                })
                if (!carts) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, carts })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case 'DELETE':

            try {
                const carts = await cart.deleteOne({ _id: id })
                if (!carts) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, carts })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }






}