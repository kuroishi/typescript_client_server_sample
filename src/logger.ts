export const logger = (fun: () => any) =>
  console.log(`[${new Date().toISOString()}] ${fun()}`);
