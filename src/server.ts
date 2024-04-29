import * as http from "http";
import * as dotenv from "dotenv";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-method";

dotenv.config();

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    // queryString
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

    // List podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST)
      await getListEpisodes(request, response);

    // Filter podcasts episodes
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE)
      await getFilterEpisodes(request, response);
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
