import dbConnect from "../../../lib/dbConnect";
import Currency from "../../../models/Currency";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

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

  switch (method) {
    case "GET":
      try {
        const currency = await lastDB(
          Currency,
          "default"
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: currency });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      res.status(400).json({ success: false });
  }
}
