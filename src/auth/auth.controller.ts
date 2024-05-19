import { Body, Controller, Get, Post } from '@nestjs/common';
import { authPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){
        
    }
    @Post('signUp')
    signUp(){
        return this.authService.signUp()
    }


    @Post('signIn')
    signUn(){
        return this.authService.signIn()
    }
    // login(@Body() authpayload: authPayloadDto){

    // }

    @Get('signOut')
    signOut(){
        return this.authService.signOut()
        }
}
