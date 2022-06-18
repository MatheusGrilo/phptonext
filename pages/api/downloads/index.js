import dbConnect from "../../../lib/dbConnect";
import Download from "../../../models/Download";

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

  const downs = [
    {
      _id: "1",
      title: "MediaFire",
      info: "Pasta com todos os arquivos",
      link: "https://www.mediafire.com/folder/kauzy8fazwuzs/InfoHouse",
      link_name: "MediaFire",
      uploader: "Grilo",
      needUser: true,
    },
    {
      _id: "2",
      title: "Java 8u251 Windows i586 (x86)",
      info: "Versão antiga para conectividade social",
      link: "https://www.mediafire.com/file/lukerdbyufd6088/jre-8u251-windows-i586.exe/file",
      link_name: "MediaFire",
      uploader: "Grilo",
      needUser: false,
    },
    {
      _id: "3",
      title: "Resets impressora EPSON (senha: infohouse)",
      info: "L396, L375, L355, L110, L210, L350, L300, L130, L220, L310, L360, L365, L3150, L380, L383, L385, L485",
      link: "https://www.mediafire.com/file/07ptw7xpp6325b3/Resets_EPSON_infohouse_%25C3%25A9_a_senha.rar/file",
      link_name: "MediaFire",
      uploader: "Grilo",
      needUser: true,
    },
    {
      _id: "4",
      title: "KMS Suite",
      info: " Ativadores do Windows e do Pacote Office (com reativação)",
      link: "https://www.mediafire.com/file/5m6c6ijxho6nx3s/KMS_Suite_v8.6_EN.zip/file",
      link_name: "MediaFire",
      uploader: "Grilo",
      needUser: true,
    },
  ];

  switch (method) {
    case "GET":
      try {
        const download = await lastDB(
          Download,
          "default"
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: downs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      res.status(400).json({ success: false });
  }
}
