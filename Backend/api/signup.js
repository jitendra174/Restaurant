export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Name, Email, Password } = req.body;

   
    console.log("Signup attempt:", { Name, Email, Password });

    return res.status(200).json({ status: "success" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
