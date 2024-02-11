export function getFormatCurrency(price) {
    const dollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  
    return dollar.format(price);
  }