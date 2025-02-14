import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { usersRepositoryMock } from "../testing/mocks/user-repository.mock";
import { jwtServiceMock } from "../testing/mocks/jwt-service.mock";
import { userServiceMock } from "../testing/mocks/user-service.mock";
import { mailerServiceMock } from "../testing/mocks/mailer-service.mock";

describe('AuthService', () => {
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, usersRepositoryMock, jwtServiceMock, userServiceMock, mailerServiceMock],
    }).compile();
  });
});
