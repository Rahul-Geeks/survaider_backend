let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let adultDataSchema = Schema({
    age: Number,
    work: String,
    fnlwgt: Number,
    education: String,
    education_num: Number,
    marital_status: String,
    occupation : String,
	relationship : String,
	race : String,
	sex : String,
	capital_gain : Number,
	capital_loss : Number,
	hours_per_week : Number,
	native_country : String,
	salary : String
});

module.exports = mongoose.model("AdultData", adultDataSchema, "adult_data");