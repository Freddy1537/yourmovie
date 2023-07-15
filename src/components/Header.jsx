import React, { useState } from 'react';

const Header = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica de inicio de sesión con el email y la contraseña ingresados
    console.log('Iniciar sesión:', email, password);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica de registro con el email y la contraseña ingresados
    console.log('Registrarse:', email, password);
  };

  return (
    <header className="header" style={{ backgroundColor: 'orange', color: 'white' }}>
      <form onSubmit={handleLoginSubmit}>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
        <button type="submit" style={{ backgroundColor: 'red' }}>Iniciar sesión</button>
      </form>
      <form onSubmit={handleRegisterSubmit}>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
        <button type="submit" style={{ backgroundColor: 'red' }}>Registrarse</button>
      </form>
    </header>
  );
};

export default Header;
