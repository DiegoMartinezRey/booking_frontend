import { useAuth } from "@/contexts/Login";
import axios from "axios";
import { useState } from "react";
import Button from "./Button";

const BookingCard = ({ books, changeBooks }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const url = "http://localhost:3001";

  const setBooking = async (book) => {
    if (user && book.availability) {
      console.log(book._id);
      try {
        const response = await axios.patch(`${url}/book/${book._id}`, {
          availability: false,
        });
        const data = response.data;
        changeBooks();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("null");
    }
  };

  return (
    <>
      {books &&
        books.map((book, index) => (
          <div
            key={index}
            className="w-6/12 bg-gray-900 rounded-2xl p-6 flex flex-col"
          >
            <h1>{book.name}</h1>
            <h2>{book.type}</h2>
            {book.images && book.images.length > 0 && (
              <img
                className="w-8/12 rounded-xl"
                src={book.images[0]}
                alt={book.name}
              />
            )}
            {book.availability ? <h2>Available</h2> : <h2>Not Available</h2>}
            <Button
              style={`${user && book.availability ? "book" : "disable"}`}
              click={() => setBooking(book)}
            >
              {book.availability ? <>Book</> : <>Already book</>}
            </Button>
          </div>
        ))}
    </>
  );
};

export default BookingCard;
