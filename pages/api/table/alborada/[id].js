import dbConnect from "../../../../lib/dbConnect";
import Table from "../../../../models/Table";

export default async function handler(req, res) {
  async function lastDB(datab, name) {
    return new Promise(async (resolve, reject) => {
      datab
        .find({ from: name })
        .limit(1)
        .sort({ $natural: -1 })
        .then((res) => {
          //console.log(res);
          //resolve(res)
          resolve(res);
        });
    });
  }

  async function getTable(name) {
    try {
      const money = await lastDB(Table, name);
      //console.log(money)
      const fixed = money[0].body;
      //console.log(fixed);
      return fixed;
    } catch (err) {
      console.log("table " + name + " do not exist in database.");
    }
  }

  async function addValores(value) {
    const newdolar = parseFloat(value.replace(/,/, ".")).toFixed(2);
    //console.log("value " + value);
    //console.log("newdolar " + newdolar);

    const slicedvalue = await getTable("AlboradaRAW");
    const datadone = await slicedvalue.slice(1);

    datadone.forEach((obj) => {
      for (const [key, value] of Object.entries(obj)) {
        const valor = parseFloat(obj["Valor (U$)"]).toFixed(2);
        const custo = valor * newdolar * 1.25;
        obj.Custo = parseFloat(custo).toFixed(2);

        const venda = custo * 1.4;
        obj.Venda = parseFloat(venda).toFixed(2);
      }
    });

    //const content = JSON.stringify(datadone);

    return datadone;
  }

  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const currency = await addValores(req.query.id);
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
