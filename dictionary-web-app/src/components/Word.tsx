import { useRef } from "react";
import { ExternalLink, Play } from "lucide-react";
import { Meanings } from "@/components/Meanings";
import { Word as IWord } from "@/utils/types";
import {
  MeaningElement,
  PhoneticWrapper,
  WordWrapper,
  NormalWord,
  PhoneticWord,
  PlayButton,
  Source,
  SourceWrapper,
  SourceTitle,
  SourceUrlsUl,
  SourceUrlsLi,
  Url,
} from "@/styles/Component.styled";

interface WordProps {
  word: IWord;
}

export function Word({ word }: WordProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { word: name, phonetic, phonetics, meanings, sourceUrls } = word;

  const audio = phonetics.filter((e) => e.audio !== "").map((e) => e.audio);
  const uk = audio.find((e) => e?.endsWith("uk.mp3"));
  const us = audio.find((e) => e?.endsWith("us.mp3"));
  const sortAudio = uk || us;

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <MeaningElement>
      <PhoneticWrapper>
        <WordWrapper>
          <NormalWord>{name}</NormalWord>
          {phonetic ? (
            <PhoneticWord>{phonetic}</PhoneticWord>
          ) : (
            <PhoneticWord>No Phonetic Found!</PhoneticWord>
          )}
        </WordWrapper>
        {sortAudio && (
          <PlayButton onClick={playAudio}>
            <Play width={25} height={25} />
          </PlayButton>
        )}
        <audio ref={audioRef} src={sortAudio} />
      </PhoneticWrapper>

      <Meanings meanings={meanings} />

      <Source>
        <SourceWrapper>
          <SourceTitle>Source</SourceTitle>
          <SourceUrlsUl>
            {sourceUrls.map((url, index) => (
              <SourceUrlsLi key={index}>
                <Url href={url} target="_blank">
                  {url}
                </Url>
                <ExternalLink />
              </SourceUrlsLi>
            ))}
          </SourceUrlsUl>
        </SourceWrapper>
      </Source>
    </MeaningElement>
  );
}
