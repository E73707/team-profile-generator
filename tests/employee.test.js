const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initilization", () => {
    it("should have a 'name' property", () => {
      const obj = new Employee();

      expect(obj.hasOwnProperty("name", "id", "email")).toBe(true);
    });
    it("should have a 'id' property", () => {
      const obj = new Employee();

      expect(obj.hasOwnProperty("id")).toBe(true);
    });
    it("should have a 'email' property", () => {
      const obj = new Employee();

      expect(obj.hasOwnProperty("email")).toBe(true);
    });
  });
  describe("get role", () => {
    it('should return "employee" when the "getRole" function is called', () => {
      const obj = new Employee();
      expect(obj.getRole()).toEqual("Employee");
    });
  });
  describe("Functions", () => {
    it("should return the correct name when the getName function is called", () => {
      const obj = new Employee("ed", 34, "eddivaughan@gmail.com");
      expect(obj.getName()).toEqual("ed");
    });
    it("should return the correct id when the getId function is called", () => {
      const obj = new Employee("ed", 34, "eddivaughan@gmail.com");
      expect(obj.getId()).toEqual(34);
    });
    it("should return the correct email when the getEmail function is called", () => {
      const obj = new Employee("ed", 34, "eddivaughan@gmail.com");
      expect(obj.getEmail()).toEqual("eddivaughan@gmail.com");
    });
  });
});
