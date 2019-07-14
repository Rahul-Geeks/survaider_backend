require("./db.connection");

let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let CONFIG = require("./config");
let async = require("async");
let app = express();
const server = require("http").Server(app);

let AdultData = mongoose.model("AdultData");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({ type: "application/json" }));

app.get('/home', (req, res) => {
    async.parallel([function (callback) {
        AdultData
            .find({ sex: "Male" }).count().exec((error, response) => {
                if (error) {
                    console.log("Error while Fetching and counting 'Male' data");
                    console.log(error);
                    callback(error, null);
                } else {
                    console.log("Total 'Male' adults are:");
                    console.log(response);
                    callback(null, response);
                }
            });
    },
    function (callback) {
        AdultData
            .find({ sex: "Female" }).count().exec((error, response) => {
                if (error) {
                    console.log("Error while Fetching and counting 'Female' data");
                    console.log(error);
                    callback(error, null);
                } else {
                    console.log("Total 'Female' adults are:");
                    console.log(response);
                    callback(null, response);
                }
            });
    }],
        function (err, results) {
            if (err) {
                console.log("Error in Async!");
                console.log(err);
            } else {
                console.log("'Male & Female' counting found");
                console.log("Male:", results[0], "& Female:", results[1]);
                res
                    .status(200)
                    .send({
                        "auth": true,
                        "message": "'Male & Female' counting found",
                        "response": {
                            male: results[0],
                            female: results[1]
                        }
                    });
            }
        });

});

app.get('/relation', (req, res) => {
    async.parallel([function (callback) {
        AdultData
            .find({ relationship: "Not-in-family" }).count().exec((error, response) => {
                if (error) {
                    console.log("Error while Fetching and counting 'Not-in-family' data");
                    console.log(error);
                    callback(error, null);
                } else {
                    console.log("Total 'Not-in-family' adults are:");
                    console.log(response);
                    callback(null, response);
                }
            });
    },
    function (callback) {
        AdultData
            .find({ relationship: "Husband" }).count().exec((error, response) => {
                if (error) {
                    console.log("Error while Fetching and counting 'Husband' data");
                    console.log(error);
                    callback(error, null);
                } else {
                    console.log("Total 'Husband' adults are:");
                    console.log(response);
                    callback(null, response);
                }
            });
    },
    function (callback) {
        AdultData
            .find({ relationship: "Wife" }).count().exec((error, response) => {
                if (error) {
                    console.log("Error while Fetching and counting 'Wife' data");
                    console.log(error);
                    callback(error, null);
                } else {
                    console.log("Total 'Wife' adults are:");
                    console.log(response);
                    callback(null, response);
                }
            });
    },
    function (callback) {
        AdultData
            .find({ relationship: "Own-child" }).count().exec((error, response) => {
                if (error) {
                    console.log("Error while Fetching and counting 'Own-child' data");
                    console.log(error);
                    callback(error, null);
                } else {
                    console.log("Total 'Own-child' adults are:");
                    console.log(response);
                    callback(null, response);
                }
            });
    },
    function (callback) {
        AdultData
            .find({ relationship: "Other-relative" }).count().exec((error, response) => {
                if (error) {
                    console.log("Error while Fetching and counting 'Other-relative' data");
                    console.log(error);
                    callback(error, null);
                } else {
                    console.log("Total 'Other-relative' adults are:");
                    console.log(response);
                    callback(null, response);
                }
            });
    },
    function (callback) {
        AdultData
            .find({ relationship: "Unmarried" }).count().exec((error, response) => {
                if (error) {
                    console.log("Error while Fetching and counting 'Unmarried' data");
                    console.log(error);
                    callback(error, null);
                } else {
                    console.log("Total 'Unmarried' adults are:");
                    console.log(response);
                    callback(null, response);
                }
            });
    }],
        function (err, results) {
            if (err) {
                console.log("Error in Async!");
                console.log(err);
            } else {
                console.log("'Relationship' status counting found");
                console.log("Not-in-family:", results[0], ", Husband:", results[1]
                , ", Wife:", results[2], ", Own-child:", results[3]
                , ", Other-relative:", results[4], ", Unmarried:", results[5]);
                res
                    .status(200)
                    .send({
                        "auth": true,
                        "message": "'Relationship' status counting found",
                        "response": {
                            notInFamily: results[0],
                            husband: results[1],
                            wife: results[2],
                            ownChild: results[3],
                            otherRelative: results[4],
                            unmarried: results[5]
                        }
                    });
            }
        });

});

server.listen(CONFIG.PORT, CONFIG.HOST, (error) => {
    if (error) {
        console.log(`Error while connecting to the server with port ${CONFIG.PORT}`);
        console.log(error);
    } else {
        console.log(`Server running successfully at port ${CONFIG.PORT}`);
    }
});