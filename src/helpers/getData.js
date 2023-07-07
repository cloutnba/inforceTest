const getData = async () =>  {
    const response = await fetch('/db.json');
    const result = await response.json();
    return result;
}


export default getData;