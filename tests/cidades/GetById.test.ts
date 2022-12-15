import { testServer } from "../jest.setup";

describe("Cidades - GetById", () => {
  it("Busca registro por id", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "Caxias do sul" });

    expect(res1.statusCode).toEqual(201);

    const resBuscada = await testServer.get(`/cidades/${res1.body}`).send();

    expect(resBuscada.statusCode).toEqual(200);
    expect(resBuscada.body).toHaveProperty("nome");
  });
  it("Tenta buscar registro que não existe", async () => {
    const res1 = await testServer.get("/cidades/99999").send();

    expect(res1.statusCode).toEqual(500);
    expect(res1.body).toHaveProperty("errors.default");
  });
});
