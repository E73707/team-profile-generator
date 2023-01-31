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

    describe("get role", () => {
      it('should return "employee" when the "getRole" function is called', () => {
        const obj = new Employee();
        expect(obj.getRole()).toEqual("Employee");
      });
    });
  });
});
