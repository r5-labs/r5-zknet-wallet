export function formatR5(balance: bigint): string {
    const divisor = 10n ** 18n;
    const whole = balance / divisor;
    const fractional = balance % divisor;
    let fractionStr = fractional.toString().padStart(18, "0").slice(0, 4).replace(/0+$/, "");
    const formattedWhole = whole.toLocaleString();
    return fractionStr ? `${formattedWhole}.${fractionStr}` : formattedWhole;
  }
  