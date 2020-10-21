export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function getFileExtension(filename){
  return filename.slice((filename.lastIndexOf('.') -1 >>> 0 ) + 2)
}

export function createDetaTree(dataset){
  let hashTable = Object.create(null);
  dataset.forEach(a => hashTable[a.id] = {...a , childNode : []})
  let dataTree = [];
    dataset.forEach(a => {
      if (a.parentId) hashTable[a.parentId].childNode.push(hashTable[a.id])
      else dataTree.push(hashTable[a.id])
    })
    return dataTree
} 
