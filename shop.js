const fruits = [
    {
        title: "pineaple",
        price: 10,
        img: "https://www.google.com/imgres?q=pineapple&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71bNsWlkyeL._AC_UF894%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.de%2F-%2Fen%2FArtificial-Pineapple-Realistic-Cabinet-Decoration%2Fdp%2FB07S1Y7MYZ&docid=MUQrtdti8JYwBM&tbnid=EnYqG9JTtBxfIM&vet=12ahUKEwiKq9r-uaKLAxWjzgIHHah6O20QM3oECBgQAA..i&w=509&h=1000&hcb=2&ved=2ahUKEwiKq9r-uaKLAxWjzgIHHah6O20QM3oECBgQAA"
    },
    {
        title: "ananas",
        price: 12.5,
        img: "https://www.google.com/imgres?q=ananas&imgurl=https%3A%2F%2Fknow-how.mnstry.com%2Fwp-content%2Fuploads%2F2021%2F01%2FAnanas.jpg&imgrefurl=https%3A%2F%2Fknow-how.mnstry.com%2Fananas-wichtige-naehrstoffe-verdauungsfoerdernd%2F&docid=EMX84F6jt1YE0M&tbnid=e0rzegtC3khcOM&vet=12ahUKEwjy34umuqKLAxXP3QIHHU1WE0IQM3oECBwQAA..i&w=1000&h=666&hcb=2&ved=2ahUKEwjy34umuqKLAxXP3QIHHU1WE0IQM3oECBwQAA"
    },
    {
        title: "banana",
        price: 8.5,
        img: "https://www.google.com/imgres?q=banana&imgurl=https%3A%2F%2Famsterdam.co.nz%2Fcdn%2Fshop%2Fproducts%2Fbanana-p.jpg%3Fv%3D1620429496&imgrefurl=https%3A%2F%2Famsterdam.co.nz%2Fproducts%2Fpremium-banana&docid=Ry5PlEvFJbtnxM&tbnid=sh-ExaTQGVGKWM&vet=12ahUKEwi_p7m-uqKLAxVE2gIHHf9jJ2cQM3oECDoQAA..i&w=960&h=997&hcb=2&ved=2ahUKEwi_p7m-uqKLAxVE2gIHHf9jJ2cQM3oECDoQAA"
    },
    {
        title: "pear",
        price: 5,
        img: "https://www.google.com/imgres?q=pear&imgurl=https%3A%2F%2Frainierfruit.com%2Fwp-content%2Fuploads%2F2021%2F10%2FRainier-Fruit-Pears.png&imgrefurl=https%3A%2F%2Frainierfruit.com%2Fpears&docid=hzeeomHIQzo6ZM&tbnid=cXDxddoytevu3M&vet=12ahUKEwjnv_77uqKLAxVjcfEDHTVzCLgQM3oECDQQAA..i&w=1080&h=617&hcb=2&ved=2ahUKEwjnv_77uqKLAxVjcfEDHTVzCLgQM3oECDQQAA"
    },
    {
        title: "watermelon",
        price: 15,
        img: "https://www.google.com/imgres?q=watermelon&imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Ffresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1684966820.jpg%3Fcrop%3D0.6673xw%3A1xh%3Bcenter%2Ctop%26resize%3D640%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Fhealth%2Fdiet-nutrition%2Fa40257118%2Fwatermelon-health-benefits%2F&docid=p3l7kSMKvDtC2M&tbnid=uyCwEW6a6QCNqM&vet=12ahUKEwiU96_BvKKLAxVexAIHHdlfHvkQM3oECEcQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwiU96_BvKKLAxVexAIHHdlfHvkQM3oECEcQAA"
    }
];

const fruitsElements = fruits.map(fruit => `        <li class="item">
            <h3 class="fruits-title">${fruit.title}</h3>
            <p class="fruits-text">${fruit.price}</p>
            <img src="${fruit.img}" alt="${fruit.title}" class="fruits-img">
        </li>`).join("");

const listElement = document.querySelector(".list");
listElement.innerHTML = fruitsElements;