import urls from "../urls";

describe("search", () => {
  it("update action wiht query if success", async () => {
    expect(urls.search("query")).toBe(
      "https://api.polygon.io/v3/reference/tickers?search=query&active=true&apiKey=kK9WzOvyNTFTfsKJYIuRYLA1n3G8NUrU",
    );
    expect(urls.tickers).toBe(
      "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=kK9WzOvyNTFTfsKJYIuRYLA1n3G8NUrU",
    );
  });
});
