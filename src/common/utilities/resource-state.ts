import { ResourceState } from "common/types";

/**
 * Determine whether we should show a loading spinner or not
 * @param state - Resource state
 * @returns
 */
export function showLoadingSpinner(state: ResourceState): boolean {
  return state === ResourceState.IDLE || state === ResourceState.LOADING;
}
