import * as http from "http";
import * as dotenv from "dotenv";

dotenv.config();

const server = http.createServer(
  (request: http.IncomingHttpHeaders, response: http.ServerResponse) => {}
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
