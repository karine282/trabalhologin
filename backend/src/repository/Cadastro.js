import con from '../repository/conection.js';

export async function cadastrarUsuario(pessoa) {
  const comando = `
    INSERT INTO usuario (nome, email, senha)
    VALUES (?, ?, sha2(?,256))
  `;

  let resposta = await con.query(comando, [
    pessoa.nome,
    pessoa.email,
    pessoa.senha
  ]);

  return resposta[0].insertId;
}

export async function validarUsuario(pessoa) {
  const comando = `
    SELECT id_usuario, nome, email
    FROM usuario
    WHERE email = ?
      AND senha = sha2(?,256)
  `;

  let registros = await con.query(comando, [
    pessoa.email,
    pessoa.senha
  ]);

  return registros[0][0];
}
