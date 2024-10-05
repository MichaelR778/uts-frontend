const products = [
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/2/248748.webp?s=468d1a427a14bcb9d219e958b48a595d",
    title: "Ao no Hako",
  },
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/5/256607.webp?s=78400a6da03f10bc498ed150b6392379",
    title: "Kaoru Hana wa Rin to Saku",
  },
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/3/216464.webp?s=abbbeacac7f765052ebf5d03f869cf0b",
    title: "Chainsaw Man",
  },
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/3/219741.webp?s=6b2efbdb0544ae26a9d43d5601863090",
    title: "Spy x Family",
  },
  {
    img: "https://cdn.myanimelist.net/images/anime/1286/99889.webp",
    title: "Kimetsu no Yaiba",
  },
  {
    img: "https://cdn.myanimelist.net/images/anime/1614/90408.webp",
    title: "Darling in the FranXX",
  },
];

products.forEach((manga) => $("#top-products").append(createItem(manga)));

function createItem(manga) {
  var item = $('<div class="item-tile"></div>');

  // item image
  var image = $(`<img src="${manga.img}">`);
  item.append(image);

  // sisanya
  var num = Math.floor(Math.random() * 100) + 100;
  var remain = $(
    `<div class="column"><p>${manga.title}</p><small>${num} sold</small></div><i class="fa-solid fa-angle-right"></i>`
  );
  item.append(remain);

  return item;
}
