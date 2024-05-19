import { Injectable } from '@nestjs/common';
import { authPayloadDto } from './dto/auth.dto';
import { Prisma } from '@prisma/client';
@Injectable()
export class AuthService {
    constructor(){}
    async signUp(){
        return {message:"sign up complete"}
    }

    async signIn(){
        return {message:"sign in complete"}
    }

    async signOut(){
        return {message:"sign out complete"}
    }
}
