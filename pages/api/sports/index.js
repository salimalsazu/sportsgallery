import dbConnect from '../../../db/dbconnect'

import Sport from '../../../modals/Sports'



dbConnect()


export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const sportings = await Sport.find({})
                res.status(200).json({ success: true, sport: sportings })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        case 'POST':
            try {
                const sport = await Sport.create(req.body)
                res.status(200).json({ success: true, sport: sport })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;

        default:
            break;
    }
}