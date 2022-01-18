export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        res.status(200).json({
          success: false,
          error: "You must provide some table to get.",
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      res.status(400).json({ success: false });
  }
}
