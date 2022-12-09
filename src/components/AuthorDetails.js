import BookItem from "./BookItem";

let AuthorDetails = ({ author }) => {
  return (
    <>
      <div className="authorDetails" >
        <h2>Authors Biography</h2>
        <div>Name: {author.author}</div>
        <div>Birthday: {author.birthday}</div>
        <div>Birth place: {author.birthPlace}</div>
        <div>List of books</div>
      </div>
      <div className="container">
        {author?.books?.map((book, key) => (
          <BookItem key={key} book={book} />
        ))}
      </div>
    </>
  );
};

export default AuthorDetails;
