// Data Initialization

const cards = [{
id: 'card-1',
title: 'Meet with Putin',
},
{

id: 'card-2',
title: 'Call Xi ',
},
{

id: 'card-3',
title: 'Send Gold to Taiwan',
},
];

const data = {
lists: {
// this is the 1st List////////////////////
    'list-1':{
    id: 'list-1',
    title: 'Proyecto 1',
    cards,
},

// this is the 2nd List////////////////////
    'list-2':{
    id: 'list-2',
    title: 'Proyecto 2',
    cards:[], 
},
///////////////////////////////////////////
},

listIds:['list-1','list-2'],
};

export default data;
