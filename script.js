function isPalindrome(str){
   let texto = str.replace(/ /g, '').toLowerCase();
   let tamanho = texto.length;
   
   for (let i = 0; i < tamanho; i++){
    if (texto[i] !== texto[tamanho - 1 - i]){
        return false;
    }
   }
   return true;
}

function arrayMaxMin(arr){
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++){        
        if (arr[i] < min){

            min = arr[i];
            
        } else if (arr[i] > max){

            max = arr[i];
        }
    }

    return [min, max];

}
