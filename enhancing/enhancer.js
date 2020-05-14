module.exports = {
  succeed,
  fail,
  repair,
  // get,
};

// Ask why did placement of if statments matter?

function succeed(item) {
  // When enhancement succeeds
  // The item's enhancement increases by 1.
  // If the item enhancement level is 20, the enhancement level is not changed.
  // The durability of the item is not changed.

  let { enhancement }= item;
  
  if(enhancement === 20){
    return{...item, enhancement: enhancement};
  } else if(enhancement >= 0 && enhancement <= 20){
    const increased= ++enhancement;
    return {...item, enhancement: increased};
  } else{
    return {...item};
  };  
};


function fail(item) {
  // When enhancement fails
  // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  // If the item's enhancement level is greater than 16, 
  // the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

  let { durability }= item;
  let { enhancement }= item;
  
  if(enhancement >= 0 && enhancement < 15){
    return {...item, durability: durability - 5 };
  } else if(enhancement > 16 && enhancement <= 20){
    return {...item, durability: durability - 1 };
  } else if(enhancement >= 15 && enhancement <= 20){
    return {...item, durability: durability - 10 };
  } else{
    return { ...item };
  }
};

function repair(item) {
  // a repair(item) method that accepts an item object 
  // and returns a new item with the durability restored to 100
  
  item.durability= 100;

  return { ...item };
};

function get(item) {
  return { ...item };
};
