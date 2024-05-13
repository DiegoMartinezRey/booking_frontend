import BookingCard from "@/components/BookingCard";
import axios from "axios";
import { useEffect, useState } from "react";

const BookingPage = () => {
  const [books, setBooks] = useState();

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
    <div className="flex flex-col items-center gap-m w-full">
      <BookingCard books={books} />
    </div>
  );
};

export default BookingPage;
