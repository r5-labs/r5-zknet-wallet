export function isZkAddress(addr: string): boolean {
    return /^zk[a-zA-Z0-9]{60,}$/.test(addr);
  }