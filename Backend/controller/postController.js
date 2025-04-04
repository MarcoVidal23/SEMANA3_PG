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

export const likePost = async (req,res) => {
  const { id } = req.params;
  const { likes } = req.body;
  try {
    const consulta = "UPDATE posts SET likes =$1 WHERE id = $2 ";
    const { rows } = await db.query(consulta, [likes, id]);
    res.status(200).json({ message: "Like actualizado",posts: rows[0] });
  } catch (error) {
     res.status(500).json({ error: "Error al dar like" });
  }
  
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const {rows} = await  db.query ("DELETE FROM posts WHERE id = $1",[id]);
    res.status(200).json({ message: "Cliente eliminado", posts: rows[0] });
   } catch (error) {
    res.status(500).json({ error: "Error al eliminar el post" });
  }
};


