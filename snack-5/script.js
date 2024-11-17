const nums = [2, 8, 4, 7, 12, 87];

const pariArray = nums.filter((curItem) => {
     if(curItem % 2 === 0) {
       return true;
     } else{
        return false;
     }
       
     });
     console.log(pariArray);
     
    
// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]