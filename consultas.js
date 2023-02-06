const {Pool} = require('pg');

const pool = new Pool({

    host : 'localhost',
    user : 'postgres',
    password : 'admin',
    database : 'likeme',
    port : '5432'
});

const getPosts = async (req, res) => {
    const response = await pool.query('SELECT * FROM posts');
    res.status(200).json(response.rows);
}

const createPost = async (req, res) => {
    const { titulo,img ,descripcion,likes } = req.body;
    const response = await pool.query('INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)', [titulo, img, descripcion, likes]);
    console.log(response);
    res.json({
        message: 'Post Added successfully',
        body: {
            post: {titulo, img, descripcion, likes}
        }
    })
}


module.exports = {
    getPosts,
    createPost
}


