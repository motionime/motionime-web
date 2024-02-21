export function formatNumber(inputNumber) {
  const absNumber = Math.abs(inputNumber);

  let formattedNumber;
  if (absNumber >= 1000000) {
    formattedNumber = (absNumber / 1000000).toFixed(1) + "M+";
  } else if (absNumber >= 1000) {
    formattedNumber = (absNumber / 1000).toFixed(0) + "K+";
  } else {
    formattedNumber = absNumber.toString();
  }

  return {
    byline: formattedNumber,
    total: inputNumber,
    // totalMinimize: formattedNumber.replace(/[^\d]/g, ""),
  };
}
