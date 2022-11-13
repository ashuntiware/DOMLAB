var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

for (let i = 0; i < menuLinks.length; i++){
let a = document.createElement("a")
a.attributes.href = menuLinks[i].href
a.innerText = menuLinks[i].text
}

let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = ('100%');
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");
topMenuEl.appendChild(a);

let <nav id="sub-menu"> = subMenuEl;
subMenuEl.style.height = ('100%');
subMenuEl.style.bacgroundColor = 'var(--sub-menu-bg)';

