import dbConnect from "../../../lib/dbConnect";
import Currency from "../../../models/Currency";

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

export default async function handler(req, res) {
  const {
    query: { coin },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const currency = await getDolar(req.query.id.toUpperCase());
        if (!currency) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: currency });
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
