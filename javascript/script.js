//for hamburger button
const menu = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.cut');
const menu_items = document.querySelectorAll('.menu_items');

hamburger.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menu_items.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        close();
    });
});

function show() {
    menu.style.left = '0';
    menu.style.top = '0';
    document.body.style.overflow = "hidden";
}

function close() {
    menu.style.left = '-100%';
    document.body.style.overflow = "auto";
}


//searchbox
const input = document.getElementById("searching");
const message = document.getElementById('searchtext');

input.addEventListener("focus",function(){
    message.style.display = "block";
});
input.addEventListener("blur",function(){
  message.style.display = "none";
});


//fetch the segments
const segments = [
    {
      "id": "1es23",
      "displayName": "Office platforms",
      "displayTitle":"Accounting",
      "icon": "./images/ICO_Computer.svg"
    },
    {
      "id":"1xs2e",
      "displayName": "Advanced settings",
      "displayTitle":"Article types",
      "icon": "./images/ICO_Cog.svg"
    },
    {
      "id":"xf2e1",
      "displayName": "Business workflows Business workflows Business workflows Business workflows",
      "displayTitle":"All workflows",
      "icon": "./images/ICO_BusinessWorkflows.svg"
    },
    {
      "id":"xs2e1",
      "displayName": "Data",
      "displayTitle":"General",
      "icon": "./images/ICO_Servers.svg"
    }
  ];

const all_segments = [...new Set(segments.map((item) => item))];

let contentHTML = all_segments
  .map((item) => {
    var { displayName, displayTitle, icon , id } = item;
    return `
      <div class="content">
        <div class="pic">
          <img src="${icon}" alt="">
        </div>
        <div class="notes">
          <h6>${displayName}</h6>
          <h2>${displayTitle}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum repellendus itaque
            est et, cupiditate adipisci quidem perferendis unde ea, eaque possimus magni! Deserunt
            deleniti non officia alias velit laborum?</p>
        </div>
        <div class="label">
          <svg class="bookmark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </div>
      </div>
    `;
  })
  .join('');

document.getElementsByClassName('contents')[0].innerHTML = contentHTML;



  //color to bookmark
  const bookmark = document.querySelectorAll('.bookmark');
  for(let i=0;i < bookmark.length; i++){
        bookmark[i].addEventListener('click',()=>{
            bookmark[i].classList.toggle('book');
        })
  }