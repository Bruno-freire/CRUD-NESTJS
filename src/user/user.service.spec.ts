import { PrismaService } from '../prisma/prisma.service';
import { Test, TestingModule } from '../../node_modules/@nestjs/testing/';
import { UserService } from "./user.service";
import { prismaMock } from '../testing/user-repository.mock';

describe('UserService', () => {
  let userService: UserService;
  let prismaService: jest.Mocked<PrismaService>;
  
  beforeEach(async () => {
    
     const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService = module.get(PrismaService);
  })

  test('should be defined', () => {
    expect(userService).toBeDefined();
    expect(prismaService).toBeDefined();
  })
})