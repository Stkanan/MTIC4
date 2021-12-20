const express = require ('express');
const bodyParser = require ('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP; //object destructuring for graphqlhttp// middleware function that comunicates to express in order to  find the right resolver to implement the wureys
const {buildSchema} = require ('graphql'); //allows to write a schema as sa string then, based on this string graphql wil build the schema given
const mongoose  = require('mongoose');

const Event = require ('./models/event');
const app = express();



app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
    
    
    type Event{
        _id: ID        
        nombre: String   
        apellido: String!       
    }

    input EventInput {
        _id: ID
        nombre: String   
        apellido: String! 
        
    }
    
    type User{
        _id: ID! 
        nombre: String! 
        apellido: String!        
    }

    input UsertInput {
        nombre: String!   
        apellido: String! 
        
    }
    
   

    type RootQuery{
        events:[Event!]!
        }


    type RootMutation{
        createEvent(eventInput:EventInput):Event
    }

    schema {
        query: RootQuery
        mutation: RootMutation}
    `),
    

    // Resolvers Bundle    
    rootValue:{
            events :()=>{
                return Event.find()
                .then(events =>{
                    return events.map(event =>{
                        return{...event._doc, _id:event.id};
                    });
                })
                .catch(err=>{
                    throw err;

                });
            },
//////////////////////////////////////////////////
    createEvent: args =>{                            
        
        const event = new Event({
            
             nombre: args.eventInput.nombre,
             apellido: args.eventInput.apellido,

        });
        return event
        .save()
        .then(result=>{
            console.log(result)
            return{...result._doc, _id:result.id};
        })
        .catch(err=>{
            console.log(err);
            throw err;
            
        });        
    }        
        },
//////////////////////////////////////////////////
        graphiql: true 
    })
);

// String MAIN MONGO DB Connection 

mongoose.connect
(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}
@cluster0.udzwe.gcp.mongodb.net/${process.env.MONGO_DB}`)

.then(()=>{
    app.listen(3000);
})
.catch(err=> {
    console.log(err);
});
