const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should have a return method", () => {
    expect(Sort.prototype.return).to.be.a("function");
  });

  it("should return an empty array", () => {
    let sortTest = new Sort([]);
    expect(sortTest.return()).to.deep.equal([]);
  });

  it("should return an ordered array", () => {
    let sortTest = new Sort([5, 3, 7, 6, 2, 9]);
    sortTest.sort();
    expect(sortTest.return()).to.deep.equal([2, 3, 5, 6, 7, 9]);
  });

  it("should return an ordered array", () => {
    let sortTest = new Sort([3, 4, 1, 2, 5]);
    sortTest.sort();
    expect(sortTest.return()).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should return an ordered array if an unordered array including duplicate value", () => {
    let sortTest = new Sort([4, 4, 3, 3, 2, 1, 2]);
    sortTest.sort();
    expect(sortTest.return()).to.deep.equal([1, 2, 2, 3, 3, 4, 4]);
  });

  it("should return an original array that is not changed if a passed array is already ordred", () => {
    let sortTest = new Sort([1, 2, 3, 4, 5]);
    sortTest.sort();
    expect(sortTest.return()).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should return an ordered array", () => {
    let sortTest = new Sort([1, 2, 3, 5, 4]);
    sortTest.sort();
    expect(sortTest.return()).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
