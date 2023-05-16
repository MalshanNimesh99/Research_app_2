import { insert,findOne } from "../lib/db.handler.js";
import fetch from 'node-fetch';


// add predicted data to database
// http://localhost:5000/braintumor
export const braintumor = async (req,res) => {
    const prediction = req.body;

    await insert(prediction, 'braibnTumor_prediction').then(result => {                            
        res.status(200).json({ status:'success'});

    }).catch(err => {
        console.error(err)
        res.status(400).json({status:"fail", msg: 'Expectation Failed' });

    })

};






