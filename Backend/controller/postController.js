import { db } from "../bd/database.js";

export const agregarClientController = async (req, res) => {
  try {
    const { titulo,img,descripcion,likes } = req.body;
    const agrega = "insert into posts values (DEFAULT,$1,$2,$3,$4)";
    const values = [titulo, img, descripcion, likes];
    const result = await db.query(agrega, values);
    res.status(201).json({ message: "Cliente Agregado", posts: result.rows });
  } catch (error) {
    console.log(error.message);
  }
};

export const obtenerClientController = async (req, res) => {
  try {
    const result = await db.query("Select * from posts order by id asc");
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = async (id) => {
  try {
    const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 ";
    const { rows } = await db.query(consulta, [id]);
    return rows[0];
  } catch (error) {
    console.log(error.message);
  }
  
};

export const deletePost = async (id) => {
  try {
    const consulta = "DELETE FROM posts WHERE id = $1  ";
    const { rows } = await db.query(consulta, [id]);
    return rows[0];
  } catch (error) {
    console.log(error.message);
  }
  
};


