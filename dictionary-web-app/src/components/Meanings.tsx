import { useAppDispatch } from "@/redux/store";
import { setSearchValue } from "@/redux/searchSlice";
import { fetchWordAsync } from "@/redux/wordSlice";
import { url } from "@/utils/constants";
import type { Meaning as IMeaning } from "@/utils/types";
import {
  Meaning,
  PartOfSpeech,
  HorizontalLine,
  DefinitionsWrapper,
  DefinitionsTitle,
  Definitions,
  DefinitionWrapper,
  DefinitionItem,
  DefinitionExample,
  VariantWrapper,
  VariantTitle,
  VariantWords,
  VariantLink,
} from "@/styles/Component.styled";

interface MeaningsProps {
  meanings: IMeaning[];
}

export function Meanings({ meanings }: MeaningsProps) {
  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLParagraphElement> = (e) => {
    const searchValue = (e.target as HTMLElement).innerHTML.replace(",", "");
    dispatch(setSearchValue(searchValue));
    dispatch(fetchWordAsync({ url, searchValue }));
  };

  return (
    <>
      {meanings.map((item, index) => (
        <Meaning key={index}>
          <PartOfSpeech>
            {item.partOfSpeech}
            <HorizontalLine />
          </PartOfSpeech>

          <DefinitionsWrapper>
            <DefinitionsTitle>Meaning</DefinitionsTitle>
            <Definitions>
              {item.definitions.map((item, index) => (
                <DefinitionWrapper key={index}>
                  {item.definition && <DefinitionItem>{item.definition}</DefinitionItem>}
                  {item.example && <DefinitionExample>"{item.example}"</DefinitionExample>}
                </DefinitionWrapper>
              ))}
            </Definitions>
          </DefinitionsWrapper>

          {item.synonyms.length > 0 && (
            <VariantWrapper>
              <VariantTitle>Synonyms</VariantTitle>
              <VariantWords>
                {item.synonyms.map((word, index, arr) => (
                  <VariantLink onClick={handleClick} key={index}>
                    {word}
                    {index === arr.length - 1 ? "  " : ","}
                  </VariantLink>
                ))}
              </VariantWords>
            </VariantWrapper>
          )}

          {item.antonyms.length > 0 && (
            <VariantWrapper>
              <VariantTitle>Antonyms</VariantTitle>
              <VariantWords>
                {item.antonyms.map((word, index, arr) => (
                  <VariantLink onClick={handleClick} key={index}>
                    {word}
                    {index === arr.length - 1 ? "  " : ","}
                  </VariantLink>
                ))}
              </VariantWords>
            </VariantWrapper>
          )}
        </Meaning>
      ))}
    </>
  );
}

export default Meanings;
