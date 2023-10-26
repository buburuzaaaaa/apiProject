async function fortune(){
    let fort = await axios.get("/api/fortune/getCookie")

    document.getElementsByTagName("p")[0].innerHTML = fort.data.answer
}