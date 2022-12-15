import { testServer } from "../jest.setup";

describe("Cidades - Create", () => {
  it("Deve criar uma cidade", async () => {
    const response = await testServer
      .post("/cidades")
      .send({ nome: "Uberaba" });

    expect(response.status).toBe(201);
    expect(typeof response.body).toEqual("number");
  });
  it("Tentar criar um registro com nome muito curto", async () => {
    const response = await testServer.post("/cidades").send({ nome: "Ab" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors.body.nome");
  });
});
