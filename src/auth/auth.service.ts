import { Injectable } from '@nestjs/common';
import { authPayloadDto } from './dto/auth.dto';
import { Prisma } from '@prisma/client';
@Injectable()
export class AuthService {
    validateUser({username,password}:authPayloadDto){
        // const existUser = 
    }
}
