import User from '../models/UserModel.js';

// Controlador para manejar las solicitudes de inicio de sesión
export const loginUser = async (req, res) => {
  const { username, password } = req.body; // Obtener el nombre de usuario y la contraseña del cuerpo de la solicitud

  try {
    // Buscar el usuario en la base de datos por nombre de usuario y contraseña
    const user = await user.findOne({ username, password });

    if (user) {
      // Usuario autenticado
      res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      // Credenciales incorrectas
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    // Manejo de errores
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ success: false, message: 'Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde.' });
  }
};