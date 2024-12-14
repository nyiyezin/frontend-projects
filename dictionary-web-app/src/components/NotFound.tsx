import { SmileIcon } from "lucide-react";
import {
  NotFoundElement,
  NotFoundTitle,
  NotFoundText,
} from "@/styles/Component.styled";

export function NotFound() {
  return (
    <NotFoundElement>
      <SmileIcon style={{ marginBottom: "44px" }} />
      <NotFoundTitle>No Definitions Found</NotFoundTitle>
      <NotFoundText>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </NotFoundText>
    </NotFoundElement>
  );
}
