import dbConnect from "../../../../lib/dbConnect";
import Table from "../../../../models/Table";
var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone"); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Sao_Paulo");

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

async function lastUpdated(from) {
  try {
    const database = await lastDB(Table, from);
    //console.log(money)
    const converted = dayjs
      .tz(database[0].lastUpdated)
      .format("DD/MM/YYYY - HH:mm:ss");
    //console.log(converted)
    return converted;
  } catch (err) {
    //console.log(err);
    console.log(from + " do not exist in the database.");
  }
}

export default async function handler(req, res) {
  const {
    query: { table },
    method,
  } = req;

  await dbConnect();

  //  console.log(req.query.id);

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const last = await lastUpdated(req.query.id);
        if (!last) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: last });
      } catch (error) {
        res.status(400).json({ success: false });
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
