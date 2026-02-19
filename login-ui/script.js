const botao = document.getElementById('togglePassword');
const senha = document.getElementById('password');

// Alternar visibilidade da senha
botao.addEventListener('click', () => {
  const tipo = senha.type === 'password' ? 'text' : 'password';
  senha.type = tipo;
  botao.textContent = tipo === 'password' ? '👁' : '🙈';
});
