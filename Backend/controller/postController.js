import { db } from "../bd/database.js";

export const agregarClientController = async (req, res) => {
  try {
    const { titulo,img,descripcion,likes } = req.body;
    const agrega = "insert into posts values (DEFAULT,$1,$2,$3,$4)";
    const values = [titulo, img, descripcion, likes];
    const result = await db.query(agrega, values);
    res
      .status(201)
      .json({ message: "Cliente Agregado", posts: result.rows });
  } catch (error) {
    console.log(error.message);
  }
};

export const obtenerClientController = async (req, res) => {
  try {
    const result = await db.query("Select * from posts");
    res.status(200).json(result.rowCount);
  } catch (error) {
    console.log(error.message);
  }
};
