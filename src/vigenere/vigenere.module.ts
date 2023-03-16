import { Module } from '@nestjs/common';
import { VigenereService } from './vigenere.service';
import { VigenereController } from './vigenere.controller';

@Module({
  providers: [VigenereService],
  controllers: [VigenereController],
})
export class VigenereModule {}
