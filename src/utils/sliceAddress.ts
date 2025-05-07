export function sliceAddress(address: string): string {
    if (!address) return "";
    
    const firstPart = address.slice(0, 12);
    const secondPart = address.slice(-12);
    
    return `${firstPart}...${secondPart}`;
  }