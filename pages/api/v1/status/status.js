function status(request, response) {
  response.status(200).json({ message: "Sou aluno Curso.dev" });
}

export default status;
