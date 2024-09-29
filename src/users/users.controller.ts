import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUserDto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {

    constructor(private usersService:UsersService) {}

    @ApiTags('users')
    @Get('/users')
    getUsers() {
        return this.usersService.getUsers();
    }

    @ApiTags('users')
    @Post('/users')
    PostUsers(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
}
