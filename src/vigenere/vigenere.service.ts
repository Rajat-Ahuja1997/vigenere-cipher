import { Injectable } from '@nestjs/common';
import { CreateCipherDto } from './dto/create-cipher-dto';

@Injectable()
export class VigenereService {
  createCipher(createCipherDto: CreateCipherDto): string {
    const { basePassword, key } = createCipherDto;
    return this.vigenereEncrypt(basePassword, key);
  }

  vigenereEncrypt = (plainText: string, key: string): string => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cipherText = '';

    for (let i = 0, j = 0; i < plainText.length; i++) {
      const plainChar = plainText.charAt(i);
      if (alphabet.includes(plainChar.toUpperCase())) {
        const keyChar = key.charAt(j % key.length).toUpperCase();
        const shift = alphabet.indexOf(keyChar);
        const plainIndex = alphabet.indexOf(plainChar.toUpperCase());
        const cipherIndex = (plainIndex + shift) % alphabet.length;
        const cipherChar = alphabet.charAt(cipherIndex);
        cipherText +=
          plainChar === plainChar.toUpperCase()
            ? cipherChar
            : cipherChar.toLowerCase();
        j++;
      } else {
        cipherText += plainChar;
      }
    }

    return cipherText;
  };
}
