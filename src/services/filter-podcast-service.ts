import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterPodcast = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  // define the return interface
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // Search data
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);

  // verify data content
  responseFormat.statusCode =
    data.length > 0 ? StatusCode.OK : StatusCode.NoContent;
  responseFormat.body = data;

  return responseFormat;
};
