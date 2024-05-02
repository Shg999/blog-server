import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
export const authenticateToken = (request, response, next) =>{
    console.log('called')
        const authHeader=request.headers.authorization
        console.log(authHeader,'token')
        const token = authHeader && authHeader.split(' ')[1];
        
        if(token == null){
            return response.status(401).json({msg: 'token is missing'})
        }
        jwt.verify(token, process.env.ACCESS_SECRET_KEY,  (error, user) => {
            if (error) {
                return response.status(403).json({ msg: 'invalid token' })
            }
    
            request.user = user;
            next();
        })
}