const tags = document.querySelector(".tags");
const main = document.querySelector(".container");

let images = [];

function render() {
  const filteredTags = images.reduce((acc, image) => {
    if (!acc.includes(image.category)) {
      acc.push(image.category);
    }
    return acc;
  }, []);

  // tags
  filteredTags.forEach((t) => {
    const tag = document.createElement("a");
    tag.classList.add("tagBtn");
    tag.textContent = `${t}`;
    tags.appendChild(tag);
    tag.addEventListener('click',(el)=>{
      console.log(el.target.textContent, tag.textContent)
      images.filter(e => {
       return e.category === el.target.textContent;
      })
      
    })
  });
  

  // filling images
    images.forEach(i =>{
    const content = document.createElement("box");
    content.classList.add('box');
    const img = document.createElement('img');
    img.src = `${i.url}`;
    content.appendChild(img);
    main.appendChild(content);
  })





}


getImages()
  .then((data) => {
    images = data;
    render("resolved");
  })
  .catch((err) => {
    console.log(err);
    render("catch");
  });

render();

