import { prettyPrintStat } from "../functions";

test('pretty print', () => {
    const pretty = prettyPrintStat(5678910);
    expect(pretty).toBe("5.7m");
});