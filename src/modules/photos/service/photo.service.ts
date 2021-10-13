import { HttpClient } from "common/http";
import { addTestingNetworkVariance } from "common/utilities/api-testing";
import { IMAGE_PAGE_SIZE } from "../models/constants";
import { Photo } from './../models/photo'

export const photoService = {
  async get(page: number, pageSize = IMAGE_PAGE_SIZE) {
    await addTestingNetworkVariance();
    const skip = page * pageSize

    return HttpClient.get<Photo[]>("/photos", {
      params: {
        _start: skip,
        _limit: pageSize,
      },
    });
  },
};
