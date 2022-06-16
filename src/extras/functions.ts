import numeral from "numeral";

const prettyPrintStat = (stat: number) =>
  stat ? `${numeral(stat).format("0.0a")}` : "0";

export { prettyPrintStat };