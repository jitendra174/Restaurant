export default function handler(req, res) {
  if (req.method === "POST") {
    const { Email1, Password1 } = req.body;

    // Replace with DB check later
    console.log("Login received:", { Email1, Password1 });

    return res.status(200).json({ status: "success", message: "Login successful" });
  }

  return res.status(405).json({ status: "error", message: "Method not allowed" });
}
