//for hamburger button
const menu = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.cut');
const menu_items = document.querySelectorAll('.menu_items');
const contents = document.querySelector('.contents');
const options = document.querySelector('.options');


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

//no.of tools
const frontiers = 'https://mocki.io/v1/6f46c778-2ec4-4690-9dcb-de755e0298e7';
fetch(frontiers).then((res) => res.json()).then(data => {
  console.log(data);
  const tool_title = document.getElementById('tool_title');
  tool_title.innerHTML = `${data.length} tools`

})



//searchbox
const input = document.getElementById("searching");
const message = document.getElementById('searchtext');

input.addEventListener("focus", function () {
  message.style.display = "block";
});
input.addEventListener("blur", function () {
  message.style.display = "none";
});



//color applying to bookmarks
function applyColor() {
  savedItems = JSON.parse(localStorage.getItem('savedIds'));
  savedItems.forEach((item) => {
    if (item) {
      document.getElementById(item).classList.add('bookmark_active');
    }
  })
}


//fetch the segments
const segments = [
  {
    "id": "1es23",
    "displayName": "Office platforms",
    "displayTitle": "Accounting",
    "icon": "./images/ICO_Computer.svg"
  },
  {
    "id": "1xs2e",
    "displayName": "Advanced settings",
    "displayTitle": "Article types",
    "icon": "./images/ICO_Cog.svg"
  },
  {
    "id": "xf2e1",
    "displayName": "Business workflows Business workflows Business workflows Business workflows",
    "displayTitle": "All workflows",
    "icon": "./images/ICO_BusinessWorkflows.svg"
  },
  {
    "id": "xs2e1",
    "displayName": "Data",
    "displayTitle": "General",
    "icon": "./images/ICO_Servers.svg"
  }
];

const all_segments = [...new Set(segments.map((item) => item))];

let contentHTML = all_segments
  .map((item) => {
    var { displayName, displayTitle, icon, id } = item;
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
          <svg id='${id}' onclick=booked('${id}') class="bookmark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </div>
      </div>
    `;
  })
  .join('');

document.getElementsByClassName('contents')[0].innerHTML = contentHTML;
applyColor();


//local storage for id
function booked(id) {
  let elementId = id;
  let savedIds = JSON.parse(localStorage.getItem('savedIds')) || [];


  if (savedIds.includes(elementId)) {
    savedIds.splice(savedIds.indexOf(elementId), 1);
    localStorage.setItem('savedIds', JSON.stringify(savedIds));

    document.getElementById(id).classList.remove('bookmark_active')
  }
  else {
    savedIds.push(elementId);
    localStorage.setItem('savedIds', JSON.stringify(savedIds));

    document.getElementById(id).classList.add('bookmark_active')
  }
}



//while clicked the filter button
function filtered() {
  options.innerHTML = ""
  options.innerHTML += `
  
                    <li class="menu"><button><a href="">All</a></button></li>
                    <li class="menu"><button><a href="">Office platforms</a></button></li>
                    <li class="menu"><button><a href="">Advanced settings</a></button></li>
                    <li class="menu"><button><a href="">Data</a></button></li>
                    <li class="menu"><button><a href="">More</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg></button>
</li>


<div class="shadow">
    <button onclick="goPrevious()" id="saved"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
  </svg>
  
    </button>
</div>
                
  ` 

  let savedIds = JSON.parse(localStorage.getItem('savedIds')) || [];
  contents.innerHTML = "";
  savedIds.forEach((item) => {
    segments.forEach((ids) => {
      if (item == ids.id) {
        contents.innerHTML += `
            <div class="content">
            <div class="pic">
              <img src="${ids.icon}" alt="">
            </div>
            <div class="notes">
              <h6>${ids.displayName}</h6>
              <h2>${ids.displayTitle}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum repellendus itaque
                est et, cupiditate adipisci quidem perferendis unde ea, eaque possimus magni! Deserunt
                deleniti non officia alias velit laborum?</p>
            </div>
            </div>
            `
      }
    })
  }
  )

}


function goPrevious(){
  window.location.reload();
}



