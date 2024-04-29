import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8";

  const rawData = fs.readFileSync(pathData, language);
  let jsonFIle: PodcastModel[] = JSON.parse(rawData);

  if (podcastName) {
    jsonFIle = jsonFIle.filter(
      (podcast) => podcast.podcastName === podcastName
    );
  }

  return jsonFIle;
};
