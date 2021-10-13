export enum ResourceState {
  IDLE = "idle",
  LOADING = "loading",
  ERROR = "error",
  DONE = "done",
}

export type PagedRequest = {
  page: number;
  pageSize: number;
};
