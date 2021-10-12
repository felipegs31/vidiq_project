/**
 * Force code to wait
 * @param ms - Milliseconds to sleep
 * @returns
 */
export async function sleep(ms: number = 1000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
