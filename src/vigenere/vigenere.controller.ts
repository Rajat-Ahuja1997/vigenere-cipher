import { Body, Controller, Post } from '@nestjs/common';
import { CreateCipherDto } from './dto/create-cipher-dto';
import { VigenereService } from './vigenere.service';

@Controller('vigenere')
export class VigenereController {
  constructor(private vigenereService: VigenereService) {}

  @Post()
  createCipher(@Body() createCipherDto: CreateCipherDto) {
    const cipher = this.vigenereService.createCipher(createCipherDto);

    return JSON.stringify(cipher);
  }
}
