const tags = document.querySelector(".tags");
const main = document.querySelector(".container");
const input = document.querySelector('.searchInput');



let images = [];
let filteredImages = [];


function toggle(e){
  document.body.classList.toggle('blur');
  console.log(e.target)
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
    imgBox.onclick = toggle;


    imgBox.appendChild(img);
    main.appendChild(imgBox);
  });
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


