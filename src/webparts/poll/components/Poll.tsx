import * as React from 'react'
import PollElement from './PollElement'
import { SPFI } from '@pnp/sp';
import { getSP } from './pnpConfig';
import { ICamlQuery } from '@pnp/sp/lists';
import { IPollProps } from './IPollProps';
const Poll = (props:IPollProps) => {
  const[pollData,setPolldata] = React.useState<any>([])
  let arr: any[]
  const caml: ICamlQuery = {
    ViewXml:
      "<View><ViewFields><FieldRef Name='Title' /><FieldRef Name='QuestionId' /><FieldRef Name='QuestionName' /><FieldRef Name='Choices' /></ViewFields><RowLimit>1</RowLimit></View>",
  };

  const getData = async() =>{
    let _sp: SPFI = getSP(props.context);
    const list = await _sp.web.lists.getByTitle("OpinionPole");
  const r = await list.getItemsByCAMLQuery(caml);
  
     arr=await r;
    console.log(r);
   
    
    setPolldata(arr)
 
  
  }
// React.useEffect(()=>{
//   setPolldata(arr)
// },arr)
  React.useEffect(()=>{
    getData()
  },[])
  return (
    <>
  
    {
    console.log(pollData)
    }
    <PollElement data={pollData}/>
    </>
   
  )
}

export default Poll