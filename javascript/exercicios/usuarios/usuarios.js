const usuarios = [];

export const salvarUsuario = (nome, matricula) => {
  const usuario = { nome, matricula };
  usuarios.push(usuario);
  console.log(`Usuário ${nome} salvo com sucesso.`);
};

export const listarUsuarios = () => {
  console.log("Lista de Usuários:");
  usuarios.forEach((usuario, index) => {
    console.log(`${index + 1}. Nome: ${usuario.nome}, Matrícula: ${usuario.matricula}`);
  });
};
