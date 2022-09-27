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

  it("Return different output for different input", () => {
    const trivialKey1 = deterministicPartitionKey('Foo');
    const trivialKey2 = deterministicPartitionKey('Bar');
    expect(trivialKey1).not.toBe(trivialKey2);
  })

  it("Return consistent output for the same input", () => {
    const trivialKey1 = deterministicPartitionKey('Foo');
    const trivialKey2 = deterministicPartitionKey('Foo');
    expect(trivialKey1).toBe(trivialKey2);
  })
});
