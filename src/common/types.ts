export enum ResourceState {
  IDLE = "idle",
  LOADING = "loading",
  ERROR = "error",
  DONE = "done",
}

export type PagedRequest = {
  cursor: number;
  pageSize: number;
};
