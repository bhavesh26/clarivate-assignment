import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'shared-orm-library';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find({
      select: ['id', 'firstName'  , 'lastName'  , 'email']
    });
  }

  create(user: User) {
    return this.userRepository.save(user);
  }
} 