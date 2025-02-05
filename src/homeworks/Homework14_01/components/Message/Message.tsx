import { MessageWrapper, MessageText } from "./styles";
import { MessageProps } from "./types";


function Message({ message }: MessageProps) {
  return (
    <MessageWrapper>
      <MessageText>{message}</MessageText>
    </MessageWrapper>
  );
}

export default Message;