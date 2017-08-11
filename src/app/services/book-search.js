var transformData = ({
  items
}) => {
  let [first, ...rest] = items;
  let volumeInfo = first.volumeInfo;
  let isbn = volumeInfo.industryIdentifiers[0].identifier;
  let obj = {};
  let value = {
    title: volumeInfo.title,
    subtitle: volumeInfo.subtitle,
    author: volumeInfo.authors[0],
    image: volumeInfo.imageLinks.thumbnail,
    isRead: false,
    isbn: isbn
  };

  obj[isbn] = value;

  console.log(obj);

  return obj;
}

export default (bookTitleOrIsbn) => {
  let url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitleOrIsbn}`;

  return fetch(url, {
      method: "GET",
      mode: "cors"
    })
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(data => {
      return transformData(data);
    });
}
