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

    describe("get role", () => {
      it('should return "engineer" when the "getRole" function is called', () => {
        const obj = new Engineer();
        expect(obj.getRole()).toEqual("Engineer");
      });
    });
  });
});
