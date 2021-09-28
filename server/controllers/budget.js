const { Budget } = require("../model/budget.js");

const setbudget = (req, res) => {
  try {
      console.log(req.body)
    Budget.findOneAndUpdate(
      { userid: req.body.userid },
      {
        $set: {
          income: req.body.income,
          savings: req.body.savings,
          budget: req.body.income-req.body.savings,
        },
      },
      { new: true }
    ).exec(async (err, docs) => {
      if (err) console.log(err);
      if (!docs) {
        await Budget.create({
          userid: req.body.userid,
          income: req.body.income,
          savings: req.body.savings,
          budget: req.body.income-req.body.savings,
        });
      }
    });
    res.status(201).send("Your budget has been set successfully");
  } catch (err) {
    console.log("budget error", err);
  }
};

const getbudget = async (req, res) => {
  try {
    // console.log(req.query)
    const bg = await Budget.findOne({ userid: req.query.id }).exec();
    // console.log(bg)
    res.status(201).json(bg);
  } catch (err) {
    console.log("get budget error: ", err);
  }
};

module.exports = {getbudget, setbudget}