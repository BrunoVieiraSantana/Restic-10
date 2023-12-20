const usuarios = [];

function salvarUsuario(nome, matricula) {
  const usuario = { nome, matricula };
  usuarios.push(usuario);
  console.log(`Usuário ${nome} salvo com sucesso.`);
}

function listarUsuarios() {
  console.log("Lista de Usuários:");
  for (let index = 0; index < usuarios.length; index++) {
    const usuario = usuarios[index];
    console.log(`${index + 1}. Nome: ${usuario.nome}, Matrícula: ${usuario.matricula}`);
  }
}

export { salvarUsuario, listarUsuarios };
