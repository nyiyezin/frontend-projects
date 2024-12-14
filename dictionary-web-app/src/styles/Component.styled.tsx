import styled from "styled-components";
import { motion } from "framer-motion";
import { SearchIcon as Icon } from "lucide-react";

export const DictionaryElement = styled.main`
  padding-top: 58px;
  padding-bottom: 104px;

  @media (max-width: 768px) {
    padding-bottom: 98px;
  }

  @media (max-width: 425px) {
    padding-top: 24px;
    padding: 24px 0 65px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 737px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0px 40px;
  }

  @media (max-width: 425px) {
    max-width: 425px;
    padding: 0px 24px;
  }
`;

export const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 52px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const TogglesWrapper = styled.div`
  display: flex;
  column-gap: 26px;
  align-items: center;

  @media (max-width: 425px) {
    column-gap: 16px;
  }
`;

export const TogglesDivider = styled.div`
  width: 1px;
  height: 32px;
  background-color: var(--color-line);
`;

export const FontToggle = styled.button`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);

  display: flex;
  align-items: center;
  column-gap: 19px;

  position: relative;

  @media (max-width: 425px) {
    column-gap: 17px;

    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body-medium);
  }
`;

export const FontTogglePopUp = styled(motion.div)`
  min-width: 183px;
  background-color: var(--colors-bg);
  box-shadow: var(--shadow);
  border-radius: 16px;
  overflow: hidden;

  text-align: left;

  position: absolute;
  top: 40px;
  right: 0;
  z-index: 10;
`;

export const FontTogglePopUpContainer = styled.ul`
  padding: 24px;
`;

export const FontTogglePopUpItem = styled.li<{ font: string }>`
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);

  font-family: var(${(props) => props.font});

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:hover {
    color: var(--accent);
    transition: color 0.15s ease 0s;
  }
`;

export const ThemeToggleWrapper = styled.div<{ toggle: boolean }>`
  color: ${(props) => (props.toggle ? "var(--accent)" : "var(--secondary)")};
  display: flex;
  column-gap: 20px;
  align-items: center;

  transition: color 0.15s ease 0s;

  @media (max-width: 425px) {
    column-gap: 12px;
  }
`;

export const ThemeToggle = styled.div<{ toggle: boolean }>`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${(props) => (props.toggle ? "var(--accent)" : "var(--secondary)")};

  position: relative;
  cursor: pointer;

  transition: background-color 0.15s ease 0s;

  &:hover {
    background-color: var(--accent);
    transition: background-color 0.15s ease 0s;
  }

  &::before {
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ffffff;

    position: absolute;
    top: 50%;
    left: ${(props) => (props.toggle ? "23px" : "3px")};
    transform: translateY(-50%);

    transition: left 0.15s ease 0s;
  }
`;

export const Meaning = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const PartOfSpeech = styled.div`
  font-size: var(--font-size-heading-medium);
  line-height: var(--line-height-heading-medium);
  font-weight: var(--font-weight-bold);

  display: flex;
  align-items: center;
  column-gap: 20px;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    font-size: var(--font-size-body-medium);
    line-height: var(--line-height-body-medium);

    column-gap: 16px;

    &:not(:last-child) {
      margin-bottom: 31px;
    }
  }
`;

export const HorizontalLine = styled.div`
  flex: 1 1 50%;
  height: 1px;
  background-color: var(--color-line);
`;

export const DefinitionsWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 64px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const DefinitionsTitle = styled.p`
  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);
  font-weight: var(--font-weight-regular);
  color: var(--secondary);

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  @media (max-width: 425px) {
    font-size: var(--font-size-body-mediums);
    line-height: var(--line-height-body-mediums);

    &:not(:last-child) {
      margin-bottom: 17px;
    }
  }
`;

export const Definitions = styled.ul``;

export const DefinitionWrapper = styled.li`
  position: relative;
  padding-left: 47px;

  @media (max-width: 425px) {
    padding-left: 25px;
  }

  &::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--accent);

    position: absolute;
    left: 22px;
    top: 10px;

    @media (max-width: 425px) {
      left: 0px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

export const DefinitionItem = styled.p`
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  font-weight: var(--font-weight-regular);

  &:not(:last-child) {
    margin-bottom: 13px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

export const DefinitionExample = styled.p`
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  font-weight: var(--font-weight-regular);

  color: var(--secondary);

  @media (max-width: 425px) {
    font-size: 15px;
    line-height: var(--line-height-body-mediums);
  }
`;

export const VariantWrapper = styled.div`
  display: flex;
  column-gap: 22px;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  @media (max-width: 425px) {
    column-gap: 24px;
  }
`;

export const VariantTitle = styled.div`
  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);
  font-weight: var(--font-weight-regular);
  color: var(--secondary);

  @media (max-width: 425px) {
    font-size: var(--font-size-body-mediums);
    line-height: var(--line-height-body-mediums);
  }
`;

export const VariantWords = styled.div`
  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);
  font-weight: var(--font-weight-bold);
  color: var(--accent);

  @media (max-width: 425px) {
    font-size: var(--font-size-body-mediums);
    line-height: var(--line-height-body-mediums);
  }
`;

export const VariantLink = styled.p`
  display: inline-block;
  cursor: pointer;
  position: relative;

  margin-right: 6px;

  &:hover {
    &::before {
      content: "";
      width: 95%;
      height: 1px;
      background: var(--accent);

      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`;

export const NotFoundElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 87px;
`;

export const NotFoundTitle = styled.h2`
  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-smal);
  font-weight: var(--font-weight-bold);

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const NotFoundText = styled.p`
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  font-weight: var(--font-weight-regular);
  color: var(--secondary);
`;

export const SearchElement = styled.div`
  &:not(:last-child) {
    margin-bottom: 45px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const SearchForm = styled.form`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input.attrs(() => ({
  placeholder: "Search for any word…",
}))<{ alert: boolean }>`
  width: 100%;
  background: var(--colors-bg-input);
  border-radius: 16px;
  padding: 20px 64px 20px 24px;
  outline: 1px solid ${(props) => (props.alert ? "var(--alert)" : "none")};

  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);
  font-weight: var(--font-weight-bold);

  &::placeholder {
    opacity: 0.25;
  }

  &:focus {
    outline: 1px solid ${(props) => (props.alert ? "var(--alert)" : "var(--accent)")};
  }

  @media (max-width: 425px) {
    font-size: var(--font-size-body-mediums);
    line-height: var(--line-height-body-mediums);

    padding: 15px 64px 15px 24px;
  }
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
`;

export const AlertMessage = styled(motion.div)`
  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);

  color: var(--alert);
`;

export const MeaningElement = styled.div``;

export const PhoneticWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const WordWrapper = styled.div``;

export const NormalWord = styled.h1`
  font-size: var(--font-size-heading-large);
  line-height: var(--line-height-heading-large);
  font-weight: var(--font-weight-heading-medium);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media (max-width: 425px) {
    font-size: var(--font-size-heading-mobile);
    line-height: var(--line-height-heading-mobile);
  }
`;

export const PhoneticWord = styled.div`
  font-size: var(--font-size-heading-medium);
  line-height: var(--line-height-heading-medium);
  font-weight: var(--font-weight-regular);
  color: var(--accent);

  @media (max-width: 425px) {
    font-size: var(--font-size-body-medium);
    line-height: var(--line-height-body-medium);
  }
`;

export const PlayButton = styled.button`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 1px solid var(--color-text);
  transition: all 0.15s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    background-color: whitesmoke;
    opacity: 0.5;
  }

  @media (max-width: 425px) {
    width: 48px;
    height: 48px;
  }
`;

export const Source = styled.div`
  border-top: 1px solid var(--color-line);
  padding: 20px 0px 20px;

  @media (max-width: 425px) {
    padding: 24px 0px 20px;
  }
`;

export const SourceWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  row-gap: 8px;
  flex-wrap: wrap;
`;

export const SourceTitle = styled.div`
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-body-small);
  font-weight: var(--font-weight-regular);
  color: var(--secondary);
`;

export const SourceUrlsUl = styled.ul`
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-body-small);
  font-weight: var(--font-weight-regular);
`;

export const SourceUrlsLi = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Url = styled.a`
  color: var(--color-text);
`;
