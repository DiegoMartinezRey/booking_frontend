const BookingCard = ({ books }) => {
  return (
    <>
      {books &&
        books.map((book, index) => (
          <div key={index} className="w-6/12 bg-gray-900 rounded-2xl">
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
          </div>
        ))}
    </>
  );
};

export default BookingCard;
