const priceArray=[
    {   id:"1",
        name:"1F搖滾區",
        price:"400"
    },
    {   id:"2",
        name:"1F搖滾區+酒水暢飲",
        price:"500"
    },
    {   id:"3",
        name:"1F 後排站台",
        price:"350"
   },
   {   id:"4",
       name:"1F 後排站台+酒水暢飲",
       price:"450"
   }
   ]

   function priceData(id){
    let priceData=priceArray.find(price=>price.id===id);

    if(priceData==undefined){
        console.log("no around here");
        return undefined;
    }
    return priceData;
   }


   export {priceArray};