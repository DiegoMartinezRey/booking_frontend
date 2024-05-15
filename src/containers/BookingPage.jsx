import BookingCard from "@/components/BookingCard";
import { useAuth } from "@/contexts/Login";
import axios from "axios";
import { useEffect, useState } from "react";
import BookForm from "./BookForm";

const BookingPage = () => {
  const [books, setBooks] = useState();
  const { user } = useAuth();

  useEffect(() => {
    getAllBooks();
  }, []);

  const url = "http://localhost:3001";

  const getAllBooks = async () => {
    try {
      const response = await axios.get(`${url}/book`);
      setBooks(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-normal mt-5 gap-m w-full">
      {user && user.role === "admin" && <BookForm updateBooks={getAllBooks} />}
      <BookingCard books={books} updateBooks={getAllBooks} />
    </div>
  );
};

export default BookingPage;
