import BookingCard from "@/components/BookingCard";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useAuth } from "@/contexts/Login";
import axios from "axios";
import { useEffect, useState } from "react";
import BookForm from "./BookForm";

const BookingPage = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState();
  const [filter, setFilter] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    getAllBooks();
  }, []);

  const url = process.env.NEXT_PUBLIC_API_URL;

  const getAllBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/book`);
      setBooks(response.data);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const getBookByName = async () => {
    try {
      const response = await axios.get(`${url}/book/search`, {
        params: {
          filter: filter,
        },
      });
      setBooks(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-normal gap-m w-full p-5">
      {loading && <h1> Loading... </h1>}
      {user && user.role === "admin" && <BookForm updateBooks={getAllBooks} />}
      <div className="flex gap-3 items-center flex-wrap">
        <h2>Filter by name: </h2>
        <InputField
          type={"string"}
          value={filter}
          placeholder={"type name"}
          onChange={(text) => setFilter(text)}
        />
        <Button style={"book"} click={getBookByName}>
          Search
        </Button>
      </div>
      <BookingCard books={books} updateBooks={getAllBooks} />
    </div>
  );
};

export default BookingPage;
