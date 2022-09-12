import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Get()
  findAll() {
    return this.userService.user();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.userService.update(+id, updateUserDto);
  }

  @Get('picture/:filename')
  async getPicture(@Param('filename') filename, @Res() res: Response) {
    res.sendFile(filename, {
      root: './uploads',
    });
  }

  @Patch('upload/:idUser')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileExtension = file.originalname.split('.')[1];
          const newFileName =
            name.split(' ').join('') + '_' + Date.now() + '.' + fileExtension;

          callback(null, newFileName);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(null, false);
        }
        return callback(null, true);
      },
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('idUser') idUser: number,
  ) {
    if (!file) {
      throw new BadRequestException('File is not an image');
    } else {
      const response = await this.userService.updatePicture(
        `http://localhost:9000/user/picture/${file.filename}`,
        Number(idUser),
      );
      return {
        filePath: `http://localhost:9000/user/picture/${file.filename}`,
        data: response,
      };
    }
  }
}
