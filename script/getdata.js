const getImages = async () => {
    const response = await fetch("/data/data.json");
    console.log(response);
    const data = await response.json();
    return data;
  };