const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
                 .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}
console.log(traverse(animalHierarchy, null));

// FirstTime
// node = {}
// new Array = [  {id: 'Animals', parent: null} ]
// node = { Animals: { 
//   Mamals: {
//     Dogs: {
//       GoldRetriever: {},
//       Husky: {}
//     },
//     Cats: {
//       Bengal: {}
//     } 
//   }
// } }

// SecondTiem 

// node = {}
// new Array = [ {id: 'Mammals', parent: 'Animals'} ]
// node = { Mamals: third()}