const tags = document.querySelector(".tags");
const main = document.querySelector(".imgContainer");
const input = document.querySelector('.searchInput');
const container = document.querySelector('.container');
const lightbox = document.querySelector('.lightbox')
const lightboxImg = lightbox.querySelector('img')
const closeBtn = lightbox.querySelector('.close')
const prevBtn = lightbox.querySelector('.prev')
const nextBtn = lightbox.querySelector('.next')
const addForm = document.querySelector('.add')


let images = [];
let filteredImages = [];


add.addEventListener('click',()=>{
  
})

function addImageForm(){
main.style.display = 'none'
}

addImageForm()

input.addEventListener('keyup', (e)=>{
  let item = e.target.value;
  item = item.toLowerCase();
  const filteredData = images.filter(img => img.category.toLowerCase().includes(item));
  if (filteredData.length === 0){
    renderNoData();
  }
  renderListContainer(filteredData);
});

closeBtn.addEventListener('click', ()=>{
  lightbox.style.display = 'none'
})

function clickedImg(e){
  lightbox.style.display = "flex";
  lightboxImg.src = e.target.src;
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
    if(!errorDiv){
      errorDiv = document.createElement('div');
      errorDiv.id = 'errorDiv';
      
    }else {
      errorDiv.remove()
      clearListContainer(errorDiv);
    }

    errorDiv.innerHTML = `<p style='color:white'>no result</p>`;
    container.appendChild(errorDiv);

}


// function searchItem(e){
//   let item = e.target.value;
//   item = item.toLowerCase();
//   filteredData = images.filter(img => img.category.toLowerCase().includes(item));
//   if (filteredData.length === 0){
//     renderNoData();
//   }
//   renderListContainer(filteredData);
// }

getImages()
  .then((data) => {
    images = data;
    renderTags();
    renderListContainer(images);
  })
  .catch((err) => {
    console.log(err);
  });