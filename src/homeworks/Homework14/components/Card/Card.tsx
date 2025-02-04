import { useContext } from "react";
import { BlogContext } from "../BlogManagement/BlogManagement";
import Message from "../Message/Message";
import { CardWrapper, CardTitle } from "./styles";



function Card() {
  const { message } = useContext(BlogContext)!;

  return (
    <CardWrapper>
      <CardTitle>First Name Last Name</CardTitle>
      <Message message={message} />
    </CardWrapper>
  );
}

export default Card;
