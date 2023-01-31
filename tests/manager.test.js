const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initilization", () => {
    it("should have a 'name' property", () => {
      const obj = new Manager();

      expect(obj.hasOwnProperty("name", "id", "email", "officeNumber")).toBe(
        true
      );
    });
    it("should have a 'id' property", () => {
      const obj = new Manager();

      expect(obj.hasOwnProperty("id")).toBe(true);
    });
    it("should have a 'email' property", () => {
      const obj = new Manager();

      expect(obj.hasOwnProperty("email")).toBe(true);
    });
    it('should have the "officeNumber" property', () => {
      const obj = new Manager();
      expect(obj.hasOwnProperty("officeNumber"));
    });

    describe("get role", () => {
      it('should return "Manager" when the "getRole" function is called', () => {
        const obj = new Manager();
        expect(obj.getRole()).toEqual("Manager");
      });
    });
    describe("Functions", () => {
      it("should return the correct name when the getName function is called", () => {
        const obj = new Manager("ed", 34, "eddivaughan@gmail.com", 87);
        expect(obj.getName()).toEqual("ed");
      });
      it("should return the correct id when the getId function is called", () => {
        const obj = new Manager("ed", 34, "eddivaughan@gmail.com", 87);
        expect(obj.getId()).toEqual(34);
      });
      it("should return the correct email when the getEmail function is called", () => {
        const obj = new Manager("ed", 34, "eddivaughan@gmail.com", 87);
        expect(obj.getEmail()).toEqual("eddivaughan@gmail.com");
      });
      it("should return the correct office nummber when the getOfficeNumber function is called", () => {
        const obj = new Manager("ed", 34, "eddivaughan@gmail.com", 87);
        expect(obj.getOfficeNumber()).toEqual(87);
      });
    });
  });
});
