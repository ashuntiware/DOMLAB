var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

for (let i = 0; i < menuLinks.length; i++);
let a = document.createElement("a");
a.attributes.href = menuLinks[i].href;
a.innerText = menuLinks[i].text


let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = ('100%');
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");
topMenuEl.appendChild(a);
