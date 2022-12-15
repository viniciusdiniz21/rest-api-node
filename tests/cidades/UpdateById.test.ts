import { testServer } from "../jest.setup";

describe("Cidades - UpdateById", () => {
  it("Atualiza registro", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "Caxias do sul" });

    expect(res1.statusCode).toEqual(201);

    const resAtualizada = await testServer
      .put(`/cidades/${res1.body}`)
      .send({ nome: "Caxias" });

    expect(resAtualizada.statusCode).toEqual(204);
  });
  it("Tenta atualizar registro que não existe", async () => {
    const res1 = await testServer
      .put("/cidades/99999")
      .send({ nome: "Caxias" });

    expect(res1.statusCode).toEqual(500);
    expect(res1.body).toHaveProperty("errors.default");
  });
});
