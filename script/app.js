const tags = document.querySelector(".tags");
const main = document.querySelector(".imgContainer");
const input = document.querySelector('.searchInput');
const overlay = document.querySelector('.overlay');
const container = document.querySelector('.container');


let images = [];
let filteredImages = [];

input.addEventListener('keyup', searchItem);

function clickedImg(e){
  e.target.classList.add('selectedImg');
  overlay.appendChild(e.target)
  container.classList.toggle('blur');
  console.log('clicked', e.target)
}

// get tags;
function renderTags() {
  const filteredTags = images.reduce((acc, image) => {
    if (!acc.includes(image.category)) {
      acc.push(image.category);
    }
    return acc;
  }, []);

  filteredTags.forEach((t) => {
    const tag = document.createElement("a");
    tag.classList.add("tagBtn");
    tag.textContent = `${t}`;
    tags.appendChild(tag);
    tag.addEventListener('click',(el)=>{
      console.log(el.target.textContent, tag.textContent)
      filteredImages = images.filter(e => {
       return e.category === el.target.textContent;
      });
      if (filteredImages && filteredImages.length > 0) {
        renderListContainer(filteredImages);
      }
    })
  });
}

function clearListContainer(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function renderListContainer(datas) {
  clearListContainer(main);
  // filling images
  datas.forEach(i =>{
    const imgBox = document.createElement("div");
    imgBox.classList.add('box');
    imgBox.id = `${i.name}`;
    const img = document.createElement('img');
    img.src = `${i.url}`;
    img.addEventListener('click', clickedImg)

    imgBox.appendChild(img);
    main.appendChild(imgBox);
    
  });
}

function renderNoData(){
  let errorDiv = document.getElementById('errorDiv');
    console.log(errorDiv)
    if(!errorDiv){
      errorDiv = document.createElement('div');
      errorDiv.id = 'errorDiv';
    }else {
      clearListContainer(errorDiv);
    }
    errorDiv.innerHTML = `<p style='color:white'>no result</p>`;
    container.appendChild(errorDiv);
}
function searchItem(e){
  let item = e.target.value;
  item = item.toLowerCase();
  filteredData = images.filter(img => img.category.toLowerCase().includes(item));
  if (filteredData.length === 0){
    renderNoData();
  }
  renderListContainer(filteredData);
}

getImages()
  .then((data) => {
    images = data;
    renderTags();
    renderListContainer(images);
  })
  .catch((err) => {
    console.log(err);
  });