import { environment } from "common/environment";
import { sleep } from "./sleep";

/**
 * Force the developer to think about network conditions and unreliable responses
 */
export async function addTestingNetworkVariance(): Promise<void> {
  if (environment.isProduction) return;
  const random = Math.random();
  if (random <= 0.33) {
    await sleep(2000);
  } else if (random <= 0.5) {
    throw new Error(`Random error: forced throw `);
  }
}
