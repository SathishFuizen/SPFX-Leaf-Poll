import * as React from 'react'
import { LeafPoll, Result } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'


const PollElement = (props:any) => {

  //const [choice, setChoice] =React.useState<any[]>([])

   //const [question,setQuestion] = React.useState<string>("")
//     props.data&&props.data?.map((x:any)=>{
//         //  ch=x.Choices;
//           qn = x.QuestionName
//         // console.log(ch);
//         // console.log(qn);

//         // setQuestion(qn)
//         console.log(qn);
        
     
        
       
        
// })


    // const resData = [
    //     { id: 0, text: 'Answer 1', votes: 2 },
    //     { id: 1, text: 'Answer 2', votes: 0 },
    //     { id: 2, text: 'Answer 3', votes: 0 }
    //   ]
      
      // Object keys may vary on the poll type (see the 'Theme options' table below)
      const customTheme = {
        textColor: 'black',
        mainColor: '#00B87B',
        backgroundColor: 'rgb(255,255,255)',
        alignment: 'center'
      }

      
      
      function vote(item: Result, results: Result[]) {
        console.log(results);
        console.log(item);
        
        
        // Here you probably want to manage
        // and return the modified data to the server.
      }

    //   React.useEffect(()=>{
    //         setQuestion(qn)
    //   },qn)
    //   console.log(question);
      
    //   React.useEffect(()=>{
    //         props.data&&props.data?.map((x:any)=>{
    //             let q = x.QuestionName
    //             let c = x.Choices;
    //             let choicearr= JSON.parse(c)
    //             console.log(choicearr)
    //             setChoice(choicearr)
    //             setQuestion(q)
                
    //         })
         
    //   },props.data)
    //   console.log(choice);
    //   console.log(resData);
      
      
      
  return (
    <>
    {  props.data&&
       props.data?.map((x:any)=>{
                let q = x.QuestionName
                let c = x.Choices;
                let choicearr= JSON.parse(c)
                console.log(choicearr)
                // setChoice(choicearr)
                // setQuestion(q)
                return(
                    <>
                    <label>hi</label>
                <LeafPoll
                type='multiple'
                question={q}
                results={choicearr}
                theme={customTheme}
                onVote={vote}
                isVoted={false}
              />
              <label></label>
              </>
                ) 
            })}
    
   
    </>
    
  )
}

export default PollElement