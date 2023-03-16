import { Body, Controller, Post } from '@nestjs/common';
import { CreateCipherDto } from './dto/create-cipher-dto';
import { VigenereService } from './vigenere.service';

@Controller('vigenere')
export class VigenereController {
  constructor(private vigenereService: VigenereService) {}

  @Post()
  createCipher(@Body() createCipherDto: CreateCipherDto): string {
    return this.vigenereService.createCipher(createCipherDto);
  }
}
