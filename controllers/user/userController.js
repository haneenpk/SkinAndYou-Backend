const appoinmentModel = require("../../models/appoinmentModel")

const addAppoinment = async (req, res) => {
    try {

        console.log(req.body);
        const appoinmentData = await appoinmentModel.create(req.body)

        console.log(appoinmentData);

        res.status(200).json({ message: 'Success' })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getAppoinments = async (req, res) => {
    try {

        const appoinmentData = await appoinmentModel.find()

        console.log(appoinmentData);

        res.status(200).json({ message: 'Success' , data: appoinmentData })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    addAppoinment,
    getAppoinments,
}