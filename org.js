const org = [
  {name: 'Zuck', boss: null},
    {name: 'Schroepfer', boss: 'Zuck'},
      {name: 'Bosworth', boss: 'Schroepfer'},
        {name: 'Steve', boss: 'Bosworth'},
        {name: 'Kyle', boss: 'Bosworth'},
        {name: 'Andra', boss: 'Bosworth'},
    {name: 'Schrage', boss: 'Zuck'},
      {name: 'Vandyck', boss: 'Schrage'},
        {name: 'Sab', boss: 'Vandyck'},
        {name: 'Mich', boss: 'Vandyck'},
        {name: 'Josh', boss: 'Vandyck'}
]


function orgChart(chart, boss) {
  let node = {};
  chart.filter(item => item.boss === boss)
  .forEach(person => 
    node[person.name] = orgChart(org, person.name));

  return node;

}

function traversal(node, depth = 1) {
  for(let key in node){
    console.log(' '.repeat(depth), key);
    traversal(node[key], depth+3);
  }
}

function traverse(obj, depth = 1) {
  let ident = ' '.repeat(depth*2);
  Object.keys(obj).forEach(item => {
    console.log(ident + item);
    traverse(obj[item], depth++);
  })
}

traversal(orgChart(org, null));