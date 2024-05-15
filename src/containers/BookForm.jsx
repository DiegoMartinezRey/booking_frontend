import Button from "@/components/Button";
import InputField from "@/components/InputField";
import axios from "axios";
import { useState } from "react";

const BookForm = ({ updateBooks }) => {
  const [nameBook, setNameBook] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagesBook, setImagesBook] = useState([]);
  const [typeBook, setTypeBook] = useState("");

  const url = "http://localhost:3001";

  const addBook = async () => {
    try {
      await axios.post(`${url}/book/add`, {
        name: nameBook,
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Penthouse_Rendering.jpg/1200px-Penthouse_Rendering.jpg",
        ],
        type: typeBook,
        availability: true,
      });
      updateBooks();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getNameBook = (text) => {
    setNameBook(text);
  };
  const getTypeBook = (text) => {
    setTypeBook(text);
  };

  return (
    <div className="w-6/12 bg-gray-900 rounded-2xl p-6 flex flex-col">
      <h1>Form</h1>
      <InputField
        type={"string"}
        value={nameBook}
        placeholder={"House in madrid"}
        onChange={getNameBook}
      />
      <InputField
        type={"string"}
        value={typeBook}
        placeholder={"House"}
        onChange={getTypeBook}
      />
      <Button style={"book"} click={addBook}>
        Add
      </Button>
    </div>
  );
};

export default BookForm;
