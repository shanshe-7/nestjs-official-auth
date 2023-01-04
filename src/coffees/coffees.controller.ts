import { Permission } from './../iam/authorization/permission.type';
import { Roles } from './../iam/authorization/decorators/role.decorator';
import { ActiveUserData } from './../iam/authentication/interfaces/active-user-data.interface';
import { ActiveUser } from './../iam/decorators/active-user.decorators';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Role } from 'src/users/enums/role.enum';
import { Permissions } from '../iam/authorization/decorators/permissions.decorator';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  // @Roles(Role.Admin)
  @Permissions(Permission.CreateCoffee)
  @Post()
  create() {
    return this.coffeesService.create();
  }

  @Get()
  findAll(@ActiveUser() user: ActiveUserData) {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(+id);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(+id, updateCoffeeDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(+id);
  }
}
