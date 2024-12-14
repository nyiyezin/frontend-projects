import { useSelector } from "react-redux";
import { selectWord, selectStatus } from "@/redux/wordSlice";
import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { Word } from "@/components/Word";
import { NotFound } from "@/components/NotFound";
import { DictionaryElement, Container } from "@/styles/Component.styled";

export function Dictionary() {
  const data = useSelector(selectWord);
  const status = useSelector(selectStatus);
  return (
    <DictionaryElement>
      <Container>
        <Header />
        <Search />
        {data.length > 0 &&
          data.map((word, index) => {
            return (
              <Word
                key={index}
                word={word}
              />
            );
          })}
        {status === "error" && <NotFound />}
      </Container>
    </DictionaryElement>
  );
}
