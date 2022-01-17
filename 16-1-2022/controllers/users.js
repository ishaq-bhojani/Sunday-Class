const bcrypt = require("bcrypt");
const userModel = require("../models/user");

exports.getSignIn = (req, res) => {
    res.render("auth/signin");
};

exports.getSignUp = (req, res) => {
    res.render("auth/signup");
};

exports.postSignIn = async (req, res) => {
    try {
        const userCred = req.body;
        const user = await userModel.getAUser(userCred.email);
        const result = await bcrypt.compare(userCred.password, user.password);
        if (result) {
            req.session.user = userCred.email;
            res.send("Login Successful")
        } else {
            res.send("Invalid email and Password");
        }
    } catch (e) {
        res.send(e);
    }
};

exports.postSignUp = async (req, res) => {
    const user = req.body;
    userModel.getAUser(user.email)
        .then((matched) => {
            return res.send("User Already Exist");
        })
        .catch(async(err) => {
            try {
                await userModel.storeAUser(user);
                res.redirect("signin");
            } catch (err) {
                console.log(err);
            }
        });
};