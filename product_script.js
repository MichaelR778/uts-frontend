const romance = [
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/2/248748.webp?s=468d1a427a14bcb9d219e958b48a595d",
    title: "Ao no Hako",
  },
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/5/256607.webp?s=78400a6da03f10bc498ed150b6392379",
    title: "Kaoru Hana wa Rin to Saku",
  },
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/2/245008.webp?s=6e7b7c34b33409274d10a56b05eb2e11",
    title: "Horimiya",
  },
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/2/201572.webp?s=79bc7dac1f84f8b3b2e35a62f60c620e",
    title: "5-toubun no Hanayome",
  },
];

romance.forEach((manga) => $("#romance").append(createItem(manga)));

const comedy = [
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/3/219741.webp?s=6b2efbdb0544ae26a9d43d5601863090",
    title: "Spy x Family",
  },
  {
    img: "https://cdn.myanimelist.net/images/anime/12/76049.webp",
    title: "One Punch Man",
  },
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/2/245008.webp?s=6e7b7c34b33409274d10a56b05eb2e11",
    title: "Horimiya",
  },
  {
    img: "https://cdn.myanimelist.net/images/anime/1895/142748.webp",
    title: "Kono Subarashii Sekai ni Shukufuku wo!",
  },
];

comedy.forEach((manga) => $("#comedy").append(createItem(manga)));

const action = [
  {
    img: "https://cdn.myanimelist.net/r/334x484/images/manga/3/216464.webp?s=abbbeacac7f765052ebf5d03f869cf0b",
    title: "Chainsaw Man",
  },
  {
    img: "https://cdn.myanimelist.net/images/anime/12/76049.webp",
    title: "One Punch Man",
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

action.forEach((manga) => $("#action").append(createItem(manga)));

function createItem(manga) {
  var item = $('<div class="item"></div>');

  // item image
  var image = $(`<img src="${manga.img}">`);
  item.append(image);

  // manga title
  var title = $(`<p>${manga.title}</p>`);
  item.append(title);

  // stock left
  var num = Math.floor(Math.random() * 100);
  var stock = $(`<small>stock: ${num}</small>`);
  item.append(stock);

  return item;
}
