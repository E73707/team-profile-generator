const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initilization", () => {
    it("should have a 'name' property", () => {
      const obj = new Engineer();

      expect(obj.hasOwnProperty("name", "id", "email", "github")).toBe(true);
    });
    it("should have a 'id' property", () => {
      const obj = new Engineer();

      expect(obj.hasOwnProperty("id")).toBe(true);
    });
    it("should have a 'email' property", () => {
      const obj = new Engineer();

      expect(obj.hasOwnProperty("email")).toBe(true);
    });
    it('should have the "github" property', () => {
      const obj = new Engineer();
      expect(obj.hasOwnProperty("github"));
    });
  });
  describe("get role", () => {
    it('should return "engineer" when the "getRole" function is called', () => {
      const obj = new Engineer();
      expect(obj.getRole()).toEqual("Engineer");
    });
  });
  describe("Functions", () => {
    it("should return the correct name when the getName function is called", () => {
      const obj = new Engineer("ed", 34, "eddivaughan@gmail.com", "e73707");
      expect(obj.getName()).toEqual("ed");
    });
    it("should return the correct id when the getId function is called", () => {
      const obj = new Engineer("ed", 34, "eddivaughan@gmail.com", "e73707");
      expect(obj.getId()).toEqual(34);
    });
    it("should return the correct email when the getEmail function is called", () => {
      const obj = new Engineer("ed", 34, "eddivaughan@gmail.com", "e73707");
      expect(obj.getEmail()).toEqual("eddivaughan@gmail.com");
    });
    it("should return the correct office nummber when the getOfficeNumber function is called", () => {
      const obj = new Engineer("ed", 34, "eddivaughan@gmail.com", "e73707");
      expect(obj.getGithub()).toEqual("e73707");
    });
  });
});
