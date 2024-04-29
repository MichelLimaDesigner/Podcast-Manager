import * as http from "http";
import * as dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
