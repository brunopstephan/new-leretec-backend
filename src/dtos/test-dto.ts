import { IsString, IsNotEmpty } from 'class-validator'

export class TestBody {
  @IsString()
  @IsNotEmpty()
  public name: string

  @IsString()
  @IsNotEmpty()
  public email: string
}
