import { useAuth } from "@/contexts/Login";
import axios from "axios";
import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

const BookingCard = ({ books, updateBooks }) => {
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [nameBook, setNameBook] = useState("");
  const [typeBook, setTypeBook] = useState("");
  const { user } = useAuth();

  const url = "http://localhost:3001";

  const setBooking = async (book) => {
    if (user && book.availability) {
      try {
        await axios.patch(`${url}/book/${book._id}`, {
          availability: false,
        });
        updateBooks();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("null");
    }
  };

  const deleteBook = async (book) => {
    try {
      await axios.delete(`${url}/book/${book._id}`);
      updateBooks();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const editBook = async (book) => {
    if (editMode) {
      try {
        await axios.patch(`${url}/book/${book._id}`, {
          name: nameBook,
          type: typeBook,
        });
        updateBooks();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Cancel");
    }
    setNameBook("");
    setTypeBook("");
    setEditMode(!editMode);
  };

  const sortedBooks =
    books && books.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {books &&
        sortedBooks.map((book, index) => (
          <div
            key={index}
            className="w-6/12 bg-gray-900 rounded-2xl p-6 flex justify-between flex-wrap gap-4 min-w-80"
          >
            <div className="w-6/12 min-w-64 flex-grow aspect-video">
              {book.images && book.images.length > 0 && (
                <img
                  className="w-full rounded-xl object-cover"
                  src={book.images[0]}
                  alt={book.name}
                />
              )}
            </div>
            <div className="flex flex-col justify-between items-start gap-2 flex-grow max-w-60">
              {editMode ? (
                <InputField
                  type={"string"}
                  value={nameBook}
                  placeholder={"Name"}
                  onChange={(text) => {
                    setNameBook(text);
                  }}
                />
              ) : (
                <h1>{book.name}</h1>
              )}
              {editMode ? (
                <InputField
                  type={"string"}
                  value={typeBook}
                  placeholder={"Type"}
                  onChange={(text) => {
                    setTypeBook(text);
                  }}
                />
              ) : (
                <>
                  <div className="flex gap-2">
                    <h2>
                      <b>Type: </b>
                    </h2>
                    <h2>{book.type}</h2>
                  </div>
                </>
              )}
              <div className="flex gap-2">
                <h2>
                  <b>Status: </b>
                </h2>
                {book.availability ? (
                  <h2>Available</h2>
                ) : (
                  <h2>Not Available</h2>
                )}
              </div>
              <div className="flex gap-2 flex-wrap">
                {editMode ? (
                  <>
                    <Button style={"save"} click={() => editBook(book)}>
                      Save
                    </Button>
                    <Button
                      style={"delete"}
                      click={() => setEditMode(!editMode)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      style={`${
                        user && book.availability ? "book" : "disable"
                      }`}
                      click={() => setBooking(book)}
                    >
                      {book.availability ? <>Book</> : <>Already book</>}
                    </Button>{" "}
                    {user && user.role === "admin" && (
                      <>
                        <Button style={"delete"} click={() => deleteBook(book)}>
                          Delete
                        </Button>
                        <Button style={"edit"} click={() => editBook(book)}>
                          Edit
                        </Button>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default BookingCard;
