const tags = document.querySelector(".tags");
const main = document.querySelector(".container");
const input = document.querySelector('.searchInput');


let images = [];
let filteredImages = [];

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
    const content = document.createElement("div");
    content.classList.add('box');
    content.id = `${i.name}`;
    const img = document.createElement('img');
    img.src = `${i.url}`;
    content.appendChild(img);
    main.appendChild(content);
  });
}

// const filteredSearch = (term) => {
//   images.filter((search) =>{
//     console.log(search.)
//   })
// }

// input.addEventListener('keyup', () => {
//   const term = input.value.trim().toLowerCase();  
//   filteredSearch(term)
// })



getImages()
  .then((data) => {
    images = data;
    renderTags();
    renderListContainer(images);
  })
  .catch((err) => {
    console.log(err);
  });


