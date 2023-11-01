async function quote() {
  let quote = await axios.get('/api/quotes/getQuote');
  console.log(quote);
  document.getElementsByTagName('p')[0].innerHTML =
    quote.data[0].quote + ' - ' + quote.data[0].author;
}
