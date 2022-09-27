const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns non-'0' literal when given an input", () => {
    const trivialKey = deterministicPartitionKey('Foo');
    expect(trivialKey).not.toBe("0");
  });
});
