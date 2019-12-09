import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    getNews() {
        return 'OK';
    }

    @Get(':id')
    getOneNews(@Param('id') id) {
        return 'OK';
    }

    @Post()
    postNews(@Body() body) {
        return 'OK';
    }

    @Put(':id')
    putNews(@Body() body, @Param('id') id) {
        return 'OK';
    }

    @Delete(':id')
    deleteNews(@Param('id') id) {
        return 'OK';
    }
}
