const countdown = (num) => {
  if (num < 0) return;
  console.log(num);
  countdown(num - 1);
};

countdown(8);
countdown(-8);
console.log("----------------------------");

function countDown1(num) {
  let nextNum = num - 1;

  if (nextNum > 0) {
    console.log(num);
    countDown1(nextNum);
  } else if (nextNum == 0) {
    console.log("happy new year!!");
  }
}
countDown1(3);

console.log("------------------------");

const mainNavTree = [
  {
    title: "Home",
  },
  {
    title: "Folder",
    children: [
      {
        title: "Item1",
      },
      {
        title: "Item2",
      },
      {
        title: "Subfolder1",
        children: [
          {
            title: "Subitem1",
          },
          {
            title: "Subitem2",
          },
        ],
      },
    ],
  },
  {
    title: "Something else",
  },
];

let str = "";
const recursiveFolder = (arr) => {
  for (const element of arr) {
    for (const prop in element) {
      if (prop == "children") {
        str += " ";
        recursiveFolder(element[prop]);
        str = str.length > 1 ? str - " " : "";
      } else {
        console.log(str, "=>", element[prop]);
      }
    }
  }
};

recursiveFolder(mainNavTree);

console.log();
console.log("----------Lösung 2--------------");
console.log();

const recursiveFolderLast = (arr, level = 0) => {
  for (const element of arr) {
    for (const prop in element) {
      if (Array.isArray(element[prop])) {
        recursiveFolderLast(element[prop], level + 1);
      } else {
        console.log(" ".repeat(level), "=>", element[prop]);
      }
    }
  }
};

recursiveFolderLast(mainNavTree);

const mainNavTree2 = [
  {
    title: "Home",
  },
  {
    title: "Produkte",
    children: [
      {
        title: "Hosen",
      },
      {
        title: "Schuhe",
        children: [
          {
            title: "Sneaker",
            children: [
              {
                title: "Adidas",
                children: [
                  {
                    title: "Sneaker Adidas 1",
                  },
                  {
                    title: "Sneaker Adidas 2",
                  },
                ],
              },
              {
                title: "Nike",
                children: [
                  {
                    title: "Sneaker Nike 1",
                  },
                  {
                    title: "Sneaker Nike 2",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Spezial: Warme Winterjacke!",
      },
    ],
  },
  {
    title: "Kontakt",
  },
  {
    title: "Impressum",
  },
];
console.log("-------------");
console.log();
recursiveFolderLast(mainNavTree2);

console.log("-----Kein hardcode--------");
console.log();

const mainNavTreeLast = [
  {
    propduct: "Home",
  },
  {
    propduct: "Produkte",
    subProduct: [
      {
        propduct: "Hosen",
      },
      {
        propduct: "Schuhe",
        children: [
          {
            propduct: "Sneaker",
            children2: [
              {
                propduct: "Adidas",
                more: [
                  {
                    propduct: "Sneaker Adidas 1",
                  },
                  {
                    propduct: "Sneaker Adidas 2",
                  },
                ],
              },
              {
                propduct: "Nike",
                children: [
                  {
                    propduct: "Sneaker Nike 1",
                  },
                  {
                    propduct: "Sneaker Nike 2",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Spezial: Warme Winterjacke!",
      },
    ],
  },
  {
    title: "Kontakt",
  },
  {
    title: "Impressum",
  },
];

recursiveFolderLast(mainNavTreeLast);
