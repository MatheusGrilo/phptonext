import dbConnect from "../../../../lib/dbConnect";
import Currency from "../../../../models/Currency";
import Table from "../../../../models/Table";

async function lastDB(datab, name) {
  return new Promise(async (resolve, reject) => {
    datab
      .find({ from: name })
      .limit(1)
      .sort({ $natural: -1 })
      .then((res) => {
        //console.log(res)
        //resolve(res)
        resolve(res);
      });
  });
}

async function getDolar(choose) {
  try {
    const money = await lastDB(Currency, "default");
    //console.log(money);
    const fixed = parseFloat(money[0].body.rates[choose]).toFixed(2);
    //console.log(fixed);
    return fixed;
  } catch (err) {
    //console.log(err);
    console.log(choose + " do not exist in the database.");
  }
}

async function getTable(name) {
  try {
    const money = await lastDB(Table, name);
    //console.log(money)
    const fixed = money[0].body;
    //console.log(fixed)
    return fixed;
  } catch (err) {
    console.log("table " + name + " do not exist in database.");
  }
}

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const currency = await getTable("Excell");
        if (!currency) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(currency);
      } catch (error) {
        res.status(400).json({ success: false, data: "error" });
      }
      break;

    case "PUT":
      res.status(400).json({ success: false });
      break;

    case "DELETE":
      res.status(400).json({ success: false });
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
