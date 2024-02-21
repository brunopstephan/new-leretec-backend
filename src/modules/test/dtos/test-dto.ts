import { IsString, IsNotEmpty } from 'class-validator'

export class TestBody {
  @IsString()
  @IsNotEmpty()
  public name: string
}

//TODO: USE ZOD TO CREATE DTO EM VALIDATING PIPES

/* import { createZodDto } from 'nestjs-zod'
import { z, ZodString, ZodError } from 'nestjs-zod/z'

const TestBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
})

class TestBodyDto extends createZodDto(TestBodySchema) {}
 */
