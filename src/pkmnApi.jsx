const maxOffset = 1024;

// Should export data currently console-logged via return
async function selectedPkmn(pkmnid) {
    var data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pkmnid}/`)
       .then((response) => response.json())
       .then((data) => {
        return data;
       })
    var pkmnObj = {
        id: data.name,
        name: data.id,
        imgurl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
    };
    return pkmnObj;
}

function genUniqueRandNums(n=8) {
    var numList = [];
    while(numList.length < n) {
        var tempNum = Math.floor(Math.random() * maxOffset) + 1;
        if(numList.indexOf(tempNum) === -1) numList.push(tempNum);
    }
    return numList;
}

// Should invoke the data pull thing 8 times with check to not repeat ids in a given selection (no instance where Pikachu shows up twice)
export async function selectAllPkmn(n=8) {
    var pkmnList = [];
    const randList = genUniqueRandNums(n);
    for (let i = 0; i < n; i++) {
        const newEntry = await selectedPkmn(randList[i]);
        pkmnList.push(newEntry);
    }
    return pkmnList;
}

export default {selectAllPkmn};