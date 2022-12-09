let BookItem = ({ book }) => {
  return (
    <>
      <div
        className="card">
        <img src={book.imageUrl} alt="" />
        <div className="bottom">
          <h3 className="title"><a href={book.purchaseLink}>{book.title}</a></h3>
        </div>
      </div>
    </>
  );
};

export default BookItem;
