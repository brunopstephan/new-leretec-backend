import { IsString, IsNotEmpty } from 'class-validator'

export class TestBody {
  @IsString()
  @IsNotEmpty()
  public name: string
}

//TODO: USE ZOD TO CREATE DTO EM VALIDATING PIPES
