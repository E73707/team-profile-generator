const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initilization", () => {
    it("should have a 'name' property", () => {
      const obj = new Intern();

      expect(obj.hasOwnProperty("name", "id", "email", "school")).toBe(true);
    });
    it("should have a 'id' property", () => {
      const obj = new Intern();

      expect(obj.hasOwnProperty("id")).toBe(true);
    });
    it("should have a 'email' property", () => {
      const obj = new Intern();

      expect(obj.hasOwnProperty("email")).toBe(true);
    });
    it('should have the "school" property', () => {
      const obj = new Intern();
      expect(obj.hasOwnProperty("school"));
    });
  });
  describe("get role", () => {
    it('should return "intern" when the "getRole" function is called', () => {
      const obj = new Intern();
      expect(obj.getRole()).toEqual("intern");
    });
  });
  describe("Functions", () => {
    it("should return the correct name when the getName function is called", () => {
      const obj = new Intern("ed", 34, "eddivaughan@gmail.com", "USYD");
      expect(obj.getName()).toEqual("ed");
    });
    it("should return the correct id when the getId function is called", () => {
      const obj = new Intern("ed", 34, "eddivaughan@gmail.com", "USYD");
      expect(obj.getId()).toEqual(34);
    });
    it("should return the correct email when the getEmail function is called", () => {
      const obj = new Intern("ed", 34, "eddivaughan@gmail.com", "USYD");
      expect(obj.getEmail()).toEqual("eddivaughan@gmail.com");
    });
    it("should return the correct office nummber when the getSchool function is called", () => {
      const obj = new Intern("ed", 34, "eddivaughan@gmail.com", "USYD");
      expect(obj.getSchool()).toEqual("USYD");
    });
  });
});
