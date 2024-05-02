import express from 'express'
import { signupUser, loginuser } from '../controller/UserController.js';
import { uploadImage, getImage } from '../controller/ImageController.js';
import upload from '../utils/upload.js';
// import CreatePost from '../../client/src/components/create/CreatePost.js';
import {createPost, getAllPosts, getPost, updatePost, deletePost } from '../controller/postController.js'
import { authenticateToken } from '../controller/JwtController.js';
import { newComment, getComments, deleteComment, getAllComments } from '../controller/CommentController.js';

const router=express.Router();
router.post('/signup', signupUser);
router.post('/login', loginuser);
router.post('/file/upload', upload.single('file'), uploadImage);
//Here upload.single(file) is a middleware
router.get('/file/filename', getImage);

router.post('/create', authenticateToken, createPost);
router.get('/posts', authenticateToken, getAllPosts);
router.get('/post/:id', authenticateToken, getPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);
router.get('/comments', authenticateToken, getAllComments);
router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);

export default router;
