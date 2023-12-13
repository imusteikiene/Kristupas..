fetch("https://party-wedding.glitch.me/v1/party")
  .then(res => res.json())
  .then(data => {
    const resultKristupas = document.createElement("div");
    resultKristupas.classList.add("result-container");
    document.body.append(resultKristupas);

    //  some metodu
    const arKristupasVIPSome = data.some(guest => guest.name === "Kristupas Lapeika" && guest.VIP);

//    find metodu
    const kristupasObject = data.find(guest => guest.name === "Kristupas Lapeika");
    const arKristupasVIPFind = kristupasObject ? kristupasObject.VIP : false;

    // HTML 
    const h1 = document.createElement("h1");
    h1.innerText = "Apie Kristupą ";
    resultKristupas.append(h1);

    const pSome = document.createElement("p");
    pSome.innerText = "metodas1: ${Kristupas VIP}";
   resultKristupas.append(pSome);

    const pFind = document.createElement("p");
    pFind.innerText = "metodas2 ${kristupas VIP}";
    resultKristupas.append(pFind);

  })
  .catch(e => console.log(e.message));
