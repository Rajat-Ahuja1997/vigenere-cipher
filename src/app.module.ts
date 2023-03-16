import { Module } from '@nestjs/common';
import { VigenereModule } from './vigenere/vigenere.module';

@Module({
  imports: [VigenereModule],
})
export class AppModule {}
