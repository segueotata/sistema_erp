import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // 1. Desestrutura o DTO para obter a senha
    const { password, ...userData } = createUserDto;

    // 2. Define o 'salt' (o custo do hashing)
    const salt = await bcrypt.genSalt(10);

    // 3. Gera o hash da senha usando o salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Cria a Entity com a senha hasheada
    const user = this.userRepository.create({
      ...userData,
      hashed_password: hashedPassword, // Usa o nome da coluna do banco
    });

    // 5. Salva no banco de dados
    return this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async getByUuid(uuid: string) {
    return await this.userRepository.findOneBy({ uuid });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return await this.userRepository.delete({ uuid: id });
  }
}
