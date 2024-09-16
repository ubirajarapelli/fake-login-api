const login = function (request, h) {
  const payload = request.payload;
  if (
    payload.login === "jorge@abreu.com.br" &&
    payload.password === "abobrinha"
  ) {
    const token = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvcmdlIEFicmV1IiwiaWF0IjoxNTE2MjM5MDIyfQ.i6LHiFX7Lj7vKAyjOr54UJib841UMi9wxUeh2IVD5hQ",
    };
    return token;
  }

  return h.response({ message: "Usuário não encontrado" }).code(404);
};

module.exports = login;
