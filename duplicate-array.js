function nameArray(names){
    let uniqueNames = [];
    for(i = 0; i < names.length; i++){
        let index = names[i];
        if(uniqueNames.includes(index) === false){
            uniqueNames.push(index)
        }
    }
    return uniqueNames;
}
let thisNames = ['chink','mink','fink','mink','chink','fink','chink','mink','fink','kal','kal','kal', 'fink'];
let getNames = nameArray(thisNames)
console.log(getNames); 