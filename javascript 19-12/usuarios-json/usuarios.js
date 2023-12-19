import fs from 'fs';

const usuariosFilePath = './usuarios.json';

let usuarios = [];

const salvarUsuariosNoArquivo = () => {
  const usuariosJSON = JSON.stringify(usuarios, null, 2);
  fs.writeFileSync(usuariosFilePath, usuariosJSON, 'utf-8');
};

const carregarUsuariosDoArquivo = () => {
  try {
    const data = fs.readFileSync(usuariosFilePath, 'utf-8');
    usuarios = JSON.parse(data);
  } catch (error) {
    usuarios = [];
  }
};

export const salvarUsuario = (nome, matricula) => {
  carregarUsuariosDoArquivo();
  const usuario = { nome, matricula };
  usuarios.push(usuario);
  salvarUsuariosNoArquivo();
  console.log(`Usuário ${nome} salvo com sucesso.`);
};

export const listarUsuarios = () => {
  carregarUsuariosDoArquivo();
  console.log("Lista de Usuários:");
  usuarios.forEach((usuario, index) => {
    console.log(`${index + 1}. Nome: ${usuario.nome}, Matrícula: ${usuario.matricula}`);
  });
};
