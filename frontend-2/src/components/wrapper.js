import React, {useState} from 'react';
import List from './List/';
import store from '../utils/store';
import StoreApi from '../utils/storeApi';
import {v4 as uuid} from "uuid";
import InputContainer from './Input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

// App Style - Global
const useStyle = makeStyles((theme)=>({
  root:{
    
    display: 'flex',
    //marginTop: theme.spacing(1),    
    minHeight: '100vh', 
    background: "green",
    width: '100%',
    overflowY: 'auto',

  },
}));

export default function Wrapper() {


  const [data, setData] = useState(store);
  const classes = useStyle(); // This function will apply the styles for the new card
  const addMoreCard = (title, listId) => {
  const newCardId = uuid();
  const newCard = {
    id: newCardId,
    title,
  };

  const list = data.lists[listId];
  list.cards = [...list.cards,newCard];
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]:list,
    },
  };
  setData(newState);
};


const addMoreList = (title)=>{
  const newListId = uuid();
  const newList ={
    id:newListId,
    title,
    cards:[],

  };

const newState={
  listIds:[...data.listIds,newListId],
  lists:{
    ...data.lists,
    [newListId]:newList    
  }
}
setData(newState);
};
////////////////////////////////////////////////////////////////////////
  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;
    
    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]:list,
      },
    };
       
    setData(newState);
  };
 ///////////////////////////////////////////////////////////////////////////// 
 const onDragEnd= (result)=>{
  const{destination,source,draggableId, type}=result;
  if(!destination){
    return;
  }
  if(type==='list'){
    const newListIds = data.listIds;
    newListIds.splice(source.index,1);
    newListIds.splice(destination.index,0,draggableId);
    return;
  }
  

  const sourceList = data.lists[source.droppableId];
  const destinationList = data.lists[destination.droppableId];
  const draggingCard =   sourceList.cards.filter(
    (card)=>card.id===draggableId)[0]; // the [0] was lasting for the dragg/drop action to work //
  
  if (source.droppableId ===destination.droppableId){
    sourceList.cards.splice(source.index,1);
    destinationList.cards.splice(destination.index,0,draggingCard); 

    const newState ={
      ...data,
      lists:{
        ...data.lists,
        [sourceList.id]: destinationList,
      },
    };    
    setData(newState);
  }else {
    sourceList.cards.splice(source.index,1);
    destinationList.cards.splice(destination.index,0,draggingCard);

    const newState ={
      ...data,
      lists:{
        ...data.lists,
        [sourceList.id]: sourceList,
        [destinationList.id]:destinationList,
      },
    };
    setData(newState);
  }
}; 


return ( // One of my errors was : not calling the updateListTitle Function in the StoreApi Provider// The title could not   be updated //
    <StoreApi.Provider value={{addMoreCard, addMoreList, updateListTitle}}> 
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="app" type="list" direction="Horizontal">
{(provided)=>(
  <div className={classes.root}ref={provided.innerRef}
  {...provided.droppableProps} >      
  {data.listIds.map((listId,index)=>{
  const list = data.lists[listId];
  return <List list ={list} key={listId} index={index} />;      
      
    })}
   <InputContainer type="list"/>
   {provided.placeholder}
  </div>
)}

    </Droppable>     
    </DragDropContext>
    </StoreApi.Provider>
  );
}

