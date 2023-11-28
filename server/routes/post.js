
const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/auth');
const {
  createPost,
  updatePost,
  getPostById,
  deletePost,
  getPosts
} = require("../controllers/postController");

// Ruta protegida para crear un recurso
router.post('/create', authenticateToken, async (req, res) => {
  const post = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    userId: req.user.userId
  }
  // Lógica para crear el recurso aquí
  try {
    const postCreated = await createPost(post);

    if (postCreated) {
      return res.json({ message: `Post creado exitosamente` });
    }

  } catch (error) {
    return res.statusCode(500).json({ message: `Error interno del servidor` });
  }
});

router.get("/posts", authenticateToken, async (req, res) => {
  try {
    const postsGot = await getPosts();

    if (!postsGot) {
      return res.statusCode(500).json({message: "No se pudo obtener los posts"});
    }

    return res.json({ postsGot });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
});

router.put("/update/:id", authenticateToken, async (req, res) => {
  const postId = req.params.id;
  const post = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    imageUrl: req.body.imageUrl
  }

  try {
    const postUpdated = await updatePost(postId, post);

    if (postUpdated != 0) {
      return res.json({ message: `Post actualizado exitosamente` });
    }
    else{
      console.log(postUpdated);
      return res.json({ message: `Post no pudo ser actualizado` });
    }
  } catch (error) {
    return res.statusCode(500).json({ message: `Error interno del servidor` });
  }
});

router.delete("/delete/:id", authenticateToken, async (req, res) => {
  const postId = req.params.id;

  try {
    const postDeleted = await deletePost(postId);

    if (postDeleted != 0) {
      return res.json({ message: `Post eliminado exitosamente` });
    }
    else{
      return res.statusCode(500).json({ message: `Post no pudo ser eliminado` });
    }
  } catch (error) {
    return res.statusCode(500).json({ message: `Error interno del servidor` });
  }
});

module.exports = router;
