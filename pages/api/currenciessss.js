import dbConnect from "../../lib/dbConnect";
import Currency from "../../models/Currency";

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
    //console.log(money)
    const fixed = parseFloat(money[0].body.rates[choose]).toFixed(2);
    //console.log(fixed)
    return fixed;
  } catch (err) {
    console.log(err);
  }
}

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const dolar = await getDolar("BRL");
        res.status(200).json({ success: true, data: dolar });
      } catch (error) {
        res.status(400).json({ success: false, data: "0" });
      }
      break;
    case "POST":
      try {
        const dolar = await getDolar("BRL");
        res.status(201).json({ success: true, data: dolar });
      } catch (error) {
        res.status(400).json({ success: false, data: "0" });
      }
      break;
    default:
      res.status(400).json({ success: false, data: "0" });
      break;
  }
}
