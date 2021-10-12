import { HttpClient } from "common/http";
import { PagedRequest } from "common/types";
import { addTestingNetworkVariance } from "common/utilities/api-testing";
import { IMAGE_PAGE_SIZE } from "../models/constants";
import { Photo } from './../models/photo'

export const photoService = {
  async get({ cursor, pageSize = IMAGE_PAGE_SIZE }: PagedRequest) {
    await addTestingNetworkVariance();

    return HttpClient.get<Photo[]>("/photos", {
      params: {
        _start: cursor,
        _limit: pageSize,
      },
    });
  },
};
