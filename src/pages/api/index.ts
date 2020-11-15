import { NowRequest, NowResponse } from "@vercel/node";

import Cors from "cors";
import runMiddleware from "../../lib/Middleware/global";
import FirebaseController from "./controller";

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
});

async function handler(req: NowRequest, res: NowResponse) {
  if (req.method === "GET") {
    const { collection, doc } = req.query;
    await runMiddleware(req, res, cors);
    await FirebaseController.read(req, res, collection, doc);
  }
}

export default handler;
