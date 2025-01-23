const getImages = async () => {
  showLoader()
  const response = await fetch("/data/data.json");
  const data = await response.json();
  hideLoader()
  return data;
};

function showLoader(){
  document.querySelector('.loader').style.display = "block"
}

function hideLoader(){
  document.querySelector('.loader').style.display = "none"
}