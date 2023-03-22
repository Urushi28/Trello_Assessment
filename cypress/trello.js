/// <reference types="cypress"/>

// const { post } = require("cypress/types/jquery");

// const { method } = require("cypress/types/bluebird");
// const { get } = require("cypress/types/lodash");

describe('trillio opration', () => {
    
  

    var APIToken="ATTAf3fd69cdcdeab10b73580f070fbd7210bd3e0809608fd712fb556930226898f58B824C60";
    var APIKey="88fabfd262f183e80c3547acd526606b";
    var iD;
   
    
    it('create a board', () => {
        
     cy.request({
        method:"POST",
        url:'https://api.trello.com/1/boards/?name={name}&key='+ APIKey +'&token='+ APIToken +'',
       
    body:{
        "name":"tested930"
    },

     }).then((response)=>{

        expect(response.status).to.eql(200);
        let res=JSON.parse(JSON.stringify(response.body))
        iD=res.id
     })


    });

    it('update a board',()=>{

        cy.request({
                 
            method:"PUT",
            url:'https://api.trello.com/1/boards/'+ iD +'?key='+ APIKey +'&token='+ APIToken +'&name=changed',

            body:{
                //"ID":iD,
                "name":"oh yah yah"

               

            }

        }).then((response)=>{

            expect(response.status).to.eql(200);
        })
        })

        it('get the board',()=>{

            cy.request({

            method:"get",

            url:'https://api.trello.com/1/boards/'+ iD +'?key='+ APIKey +'&token='+ APIToken +'&name=changed',


            }).then((response)=>{

                expect(response.status).to.eql(200);
            })
            })

        it('delete the board',()=>{

            cy.request({
           
                method:"delete",

                url:'https://api.trello.com/1/boards/'+iD+'?key='+APIKey+'&token='+APIToken+''


            }).then((response)=>{
                expect(response.status).to.eql(200);  
            })


        })
});