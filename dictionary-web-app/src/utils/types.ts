// General Types
export type FontText = "Sans Serif" | "Serif" | "Mono";
export type ThemeText = "light" | "dark";

export interface IFontsFamily {
  text: FontText;
  font: string;
}

// Dictionary Api Interface
export interface Phonetic {
  text: string;
  audio?: string;
}
export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
}
export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}
export interface Word {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin?: string;
  meanings: Meaning[];
  sourceUrls: string[];
}
export type Dictionary = Word[];
