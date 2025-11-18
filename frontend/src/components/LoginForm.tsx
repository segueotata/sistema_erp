const LoginForm = ({ onToggleMode }: any) => {
  return (
    <form /* ... */>
      <h2>Acessar Conta</h2>
      {/* Inputs aqui */}

      <button type="submit">Login</button>

      {/* Botão para mudar para o outro formulário */}
      <button type="button" onClick={onToggleMode}>
        Ainda não tem conta? Registrar
      </button>
    </form>
  );
};

export default LoginForm;
