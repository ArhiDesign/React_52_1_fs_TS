import { useState, createContext } from "react";
import Card from "../Card/Card";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { BlogManagementWrapper } from "./styles";
import { BlogContextType } from "./types";

export const BlogContext = createContext<BlogContextType | undefined>(
  undefined
);

function BlogManagement() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [inputValue, setInputValue] = useState("");

  const handlePostMessage = () => {
    setMessage(inputValue);
    setInputValue("");
  };

  return (
    <BlogContext.Provider value={{ message, setMessage }}>
      <BlogManagementWrapper>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write your message here..."
          name={""}
        />
        <Button name="Post" onClick={handlePostMessage} />
        {message && <Card />}
      </BlogManagementWrapper>
    </BlogContext.Provider>
  );
}

export default BlogManagement;
