import { Body, Controller, Get, Post } from '@nestjs/common';
import { authPayloadDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    @Post('signUp')
    signUp(){
        return "this is sign up route"
    }


    @Post('signIn')
    signUn(){
        return "this is sign in route"
    }
    // login(@Body() authpayload: authPayloadDto){

    // }

    @Get('signOut')
    signOut(){
        return "this is sign out route"
        }
}
