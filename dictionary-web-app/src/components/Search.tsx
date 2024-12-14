import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch } from "@/redux/store";
import { setSearchValue, selectSearch } from "@/redux/searchSlice.ts";
import { reset } from "@/redux/wordSlice";
import { fetchWordAsync } from "@/redux/wordSlice";
import { url } from "@/utils/constants";
import {
  SearchElement,
  SearchForm,
  Input,
  SearchIcon,
  AlertMessage,
} from "@/styles/Component.styled";

export function Search() {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(selectSearch);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(reset());
    if (searchValue === "") {
      setVisibleAlert(true);
    } else {
      setVisibleAlert(false);
      dispatch(fetchWordAsync({ url, searchValue }));
    }
  };

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <SearchElement>
      <SearchForm onSubmit={handleSubmit}>
        <Input ref={inputRef} onChange={handleOnChange} value={searchValue} alert={!visibleAlert} />
        <SearchIcon />
      </SearchForm>
      <AnimatePresence>
        {visibleAlert && (
          <AlertMessage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.1,
            }}
          >
            Whoops, can&apos;t be empty…
          </AlertMessage>
        )}
      </AnimatePresence>
    </SearchElement>
  );
}
