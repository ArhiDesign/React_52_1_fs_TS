import { useContext } from 'react';

import { MessageContainer, MessageComponent } from './styles';
import { MessageContext } from '../BlogManagement/BlogManagement';

function Message() {
//Шаг 3 - забираем значение из контекста
const message = useContext(MessageContext)

  return (
    <MessageComponent>
      <MessageContainer>{message}</MessageContainer>
    </MessageComponent>
  );
}

export default Message;

