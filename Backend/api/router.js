require('dotenv').config();
const express = require('express')
const router = express.Router()
const model = require('../model/model')
const bcrypt = require('bcrypt')

router.post("/signup", async (req, res) => {
    const { Name, Email, Password } = req.body

    try {
        const user = await model.findOne({ Email: Email.toLowerCase() });

        if (user) {
            return res.json({ status: "warning", message: "Already User Registered" })
        } else {
            const hashedPassword = await bcrypt.hash(Password, Number(process.env.SALTROUND));

            const Datas = new model({
                Name,
                Email: Email.toLowerCase(),
                Password: hashedPassword
            })

            await Datas.save();

            return res.json({ status: "success", message: "user Registered successfully" })

        }
    } catch (err) {
        console.log("Error Occur while signup Process !", err)
    }
})

router.post("/login", async (req, res) => {
    const { Email1, Password1 } = req.body

    const user = await model.findOne({ Email: Email1.toLowerCase() });

    if (user) {
        if (await bcrypt.compare(Password1, user.Password)) {
            return res.json({ status: 'success', message: "Login Successfully" })
        } else {
            return res.json({ status: 'warning', message: "Invalid crendential" })
        }
    } else {
        return res.json({ status: 'error', message: "User not yer register!" })
    }


})




module.exports = router;