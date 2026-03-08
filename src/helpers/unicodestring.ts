/* 
Unicode string manipulation utilities for Twitter/X
License: MIT
*/

export class UnicodeString {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  slice(start: number, end?: number): string {
    return this.text.slice(start, end);
  }

  toString(): string {
    return this.text;
  }
}
