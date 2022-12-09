interface Mountain{
    name:string,
    height:number
}

let newMountain:Mountain = {
    name: "Kilimamjaro",
    height: 10000
}

let mountains:Mountain[] = [{ name:"Kilimanjaro", height: 19341 }, 
                            { name:"Everest", height: 29029 }, 
                            { name:"Denali", height: 20310 }];


function findNameOfTallestMountain (mountains:Mountain[]) : string {
    let tallestMountain = mountains.reduce((prev, current) => (prev.height > current.height) ? prev : current);
    return tallestMountain.name;
}

console.log(findNameOfTallestMountain(mountains));

export {findNameOfTallestMountain, Mountain};