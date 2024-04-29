import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { HttpMethod } from "./utils/http-method";
import { Routes } from "./routes/routes";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  // queryString
  const baseUrl = request.url?.split("?")[0];

  // List podcasts
  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST)
    await getListEpisodes(request, response);

  // Filter podcasts episodes
  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE)
    await getFilterEpisodes(request, response);
};
