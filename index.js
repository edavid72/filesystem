//Imports de los módulos
const fs = require('fs/promises');
const path = require('path');

const getUsers = async () => {
  //Leer el archivo
  try {
    const pathUser = path.resolve('users.json');
    const users = await fs.readFile(pathUser, { encoding: 'utf8' });
    //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
    return JSON.parse(users);
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (userObj) => {
  try {
    //leer el archivo
    //convertir el contenido en formato JSON en un objeto JS
    const users = await getUsers();
    console.log(users);
    //agregar el usuario en el arreglo
    users.push(userObj);
    console.log(users);
    //sobreescribir el arreglo en el archivo
    const pathUser = path.resolve('users.json');
    fs.writeFile(pathUser, JSON.stringify(users));
    //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
    return userObj;
    //que acabas de agregar en el arreglo
  } catch (error) {
    console.log(error);
  }
};

const clearUsers = async () => {
  try {
    //Vaciar el arreglo y sobreescribir el archivo
    const pathUser = path.resolve('users.json');
    fs.writeFile(pathUser, JSON.stringify([]));
    //Si el proceso se realizó correctamente tendrás que regresar true
    return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  addUser,
  clearUsers,
};
