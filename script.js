async function fetchData() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
    const record = await res.json();
}
fetchData();