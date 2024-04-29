import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterPodcast } from "../services/filter-podcast-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const defaultContent = { "Content-Type": ContentType.JSON };

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();

  res.writeHead(content.statusCode, defaultContent);
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceFilterPodcast(req.url);

  res.writeHead(content.statusCode, defaultContent);
  res.write(JSON.stringify(content.body));

  res.end();
};
