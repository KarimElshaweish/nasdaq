import computeUrl from "../computeUrl";

describe("search", () => {
  it("update action wiht query if success", async () => {
    expect(computeUrl("abc")).toBe(
      "abc&apiKey=kK9WzOvyNTFTfsKJYIuRYLA1n3G8NUrU",
    );
  });
});
