import dbConnect from '../../../db/dbconnect'

import Sport from '../../../modals/Sports'

dbConnect()

export default async (req, res) => {

    const {

        query: { id },
        method
    } = req

    switch (method) {
        case 'GET':

            try {
                const sport = await Sport.findById(id)
                if (!sport) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, sport })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case 'PUT':

            try {
                const sport = await Sport.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true

                })
                if (!sport) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, sport })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case 'DELETE':

            try {
                const sport = await Sport.deleteOne({ _id: id })
                if (!sport) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, sport })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }


}