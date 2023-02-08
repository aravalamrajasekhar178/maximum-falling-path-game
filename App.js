
import React from 'react';
import './App.css'
import screenshot from './latest.png' 
function App() {
  var temp=0
  var list=[]
  var dup=[]
  var ct=0;
  var p1=[];
  var p2=[];
  var y=0;
  var ptr1=0;
  var ptr2=0;
  var ptrj1=0;
  var ptrj2=0;
  var i=0;
  var j=0;
  var tr
  var td1
  var td2
  var c1;
  var c2;
  var o
  while(i<5){
    dup.push(0)
    j+=1
    if(j==5){
    list.push(dup)
    dup=[]
    j=0
    i++
    }
  }
  var bt=(i,j)=>{
    if(ct%2==0){
      ptr2=ptrj1
    }
    else{
      ptr2=ptrj2
    }
  if(i==ptr1 && i==0 && list[i][j]==0){
    var id=document.getElementById('btn'+i.toString()+j.toString())
    if(ct%2==0){
       id.style.backgroundColor='blue'
       id.style.color='white'
       p1.push(parseInt(id.innerHTML))
       ptrj1=j
       temp+=1
       var p1_score=p1.reduce((a,b)=>{return a+b;})
       document.getElementById('tab1').childNodes[0].childNodes[0].innerHTML='Player-1 total score : '+p1_score.toString()
       tr=document.createElement('tr')
       td1=document.createElement('td')
       td1.innerHTML=id.innerHTML
       td1.style.textAlign='center'
       td1.style.border='1px solid green'
       td1.style.fontWeight='bolder'
       td1.style.color='red'
       td1.style.height='40px'
       td1.style.width='100px'
       td1.style.fontSize='30px'
       td1.style.textAlign='center'
       td2=document.createElement('td')
       td2.innerHTML=''
       td2.style.textAlign='center'
       td2.style.border='1px solid green'
       td2.style.fontWeight='bolder'
       td2.style.color='red'
       td2.style.height='40px'
       td2.style.width='100px'
       td2.style.fontSize='30px'
       td2.style.textAlign='center'
       tr.appendChild(td1)
       tr.appendChild(td2)
       document.getElementById('tab2').appendChild(tr)
       document.getElementById('b').innerHTML='Player-2 has to choose one number from pink box'
       document.getElementById('b').style.color='green'
       c1=[]
       o=j
       for(var m=j-1;m<=j+1;m++){
        if(m>=0 && m<=4){
          c1.push(m)
        }
       }
      }else{
        id.style.backgroundColor='green'
        id.style.color='white'
       p2.push(parseInt(id.innerHTML))
       var p2_score=p2.reduce((a,b)=>{return a+b;})
       document.getElementById('tab1').childNodes[1].childNodes[0].innerHTML='Player-2 total score : '+p2_score.toString()
       ptrj2=j
       ptr1+=1
       td2.innerHTML=id.innerHTML
       for(var n=0;n<5;n++){
        if(n!=j && n!=o){
          document.getElementById('btn'+i.toString()+n.toString()).style.backgroundColor='yellow'
          document.getElementById('btn'+i.toString()+n.toString()).style.color='red'
        }
       }
       for(var s=0;s<c1.length;s++){
        document.getElementById('btn'+(i+1).toString()+c1[s].toString()).style.backgroundColor='magenta'
        document.getElementById('btn'+(i+1).toString()+c1[s].toString()).style.color='white'
       }
       c2=[]
       for(var n=j-1;n<=j+1;n++){
        if(n>=0 && n<5){
        c2.push(n)
        }
       }
       document.getElementById('b').innerHTML='Player-1 has to choose one number from pink box'
       document.getElementById('b').style.color='blue'
    }
    y+=1
    ct+=1
    list[i][j]+=1
  }
    else if((i==ptr1 && j>=ptr2-1 && j<=ptr2+1) && list[i][j]==0){
      id=document.getElementById('btn'+i.toString()+j.toString())
      if(ct%2==0){
         id.style.backgroundColor='blue'
         p1.push(parseInt(id.innerHTML))
         ptrj1=j
         var p1_score=p1.reduce((a,b)=>{return a+b;})
         document.getElementById('tab1').childNodes[0].childNodes[0].innerHTML='Player-1 total score : '+p1_score.toString()
         tr=document.createElement('tr')
         td1=document.createElement('td')
         td1.innerHTML=id.innerHTML
         td1.style.textAlign='center'
         td1.style.border='1px solid magenta'
         td1.style.color='red'
         td1.style.fontWeight='bolder'
         td1.style.height='40px'
         td1.style.width='100px'
         td1.style.fontSize='30px'
         td1.style.textAlign='center'
         td2=document.createElement('td')
         td2.innerHTML=''
         td2.style.textAlign='center'
         td2.style.border='1px solid magenta'
         td2.style.fontWeight='bolder'
         td2.style.color='red'
         td2.style.width='100px'
         td2.style.height='40px'
         td2.style.fontSize='30px'
         td2.style.textAlign='center'
         tr.appendChild(td1)
         tr.appendChild(td2)
         document.getElementById('tab2').appendChild(tr)
         o=j
         for(var n=0;n<c1.length;n++){
          if(c1[n]!=j){
          document.getElementById('btn'+i.toString()+n.toString()).style.backgroundColor='yellow'
          document.getElementById('btn'+i.toString()+n.toString()).style.color='red'
          }
         }
         for(var n=0;n<c2.length;n++){
          if(c2[n]!=o){
            document.getElementById('btn'+i.toString()+c2[n].toString()).style.backgroundColor='magenta'
            document.getElementById('btn'+i.toString()+c2[n].toString()).style.color='white'
          }
         }
         c1=[]
         for( n=j-1;n<=j+1;n++){
          if(n>=0&&n<5){
            c1.push(n)
          }
         }
         document.getElementById('b').innerHTML='Player-2 has to choose one number from pink box'
         document.getElementById('b').style.color='green'
        }else{
        id.style.backgroundColor='green'
        p2.push(parseInt(id.innerHTML))
        ptr1+=1
        ptrj2=j
        var p2_score=p2.reduce((a,b)=>{return a+b;})
        document.getElementById('tab1').childNodes[1].childNodes[0].innerHTML='Player-2 total score : '+p2_score.toString();
        td2.innerHTML=id.innerHTML
        for(var n=0;n<c2.length;n++){
          if(c2[n]!=o&&c2[n]!=j){
            document.getElementById('btn'+i.toString()+c2[n].toString()).style.backgroundColor='yellow'
            document.getElementById('btn'+i.toString()+c2[n].toString()).style.color='red'
          }
        }
        for(var n=0;n<c1.length;n++){
          if(i+1<5){
          document.getElementById('btn'+(i+1).toString()+c1[n].toString()).style.backgroundColor='magenta'
          document.getElementById('btn'+(i+1).toString()+c1[n].toString()).style.color='white'
          }
        }
        c2=[]
        for(var n=j-1;n<=j+1;n++){
          if(n>=0 && n<5){
            c2.push(n)
          }
        }
        if(i+1<5){
        document.getElementById('b').innerHTML='Player-1 has to choose one number from pink box'
        document.getElementById('b').style.color='blue'
        }else{
          document.getElementById('b').innerHTML='Game over'
          document.getElementById('b').style.color='green'
        }
      }
      y+=1
      list[i][j]+=1
      ct+=1
    }else{
      window.alert('Invalid selection.Please select another')
    }
    if(y==10){
    var sum1=p1.reduce((a,b)=>{return a+b;})
    var sum2=p2.reduce((a,b)=>{return a+b;})
    if(sum1>sum2){
      document.getElementById('res').innerHTML='Player-1 wins the game'
    }
    else if(sum1==sum2){
      document.getElementById('res').innerHTML='Both are equal'
    }else{
      document.getElementById('res').innerHTML='Player-2 win by '+Math.abs(sum1-sum2).toString()+' points'
    }
    document.getElementById('invisible').style.display='inline-block'
    }
  }
    var other=()=>{
      dup=[]
      list=[]
      var i=0;
      var j=0;
      while(i<5){
      document.getElementById('btn'+i.toString()+j.toString()).style.backgroundColor='yellow'   
      document.getElementById('btn'+i.toString()+j.toString()).style.color='red'   
      dup.push(0)
      j+=1
      if(j==5){        
        list.push(dup)
        dup=[]
        i+=1
        j=0
      }
    }
      ct=0
      p1=[]
      p2=[]
      document.getElementById('invisible').style.display='none'
      document.getElementById('res').innerHTML=''
      document.getElementById('tab1').childNodes[0].childNodes[0].innerHTML='Player-1 total score : 0'
      document.getElementById('tab1').childNodes[1].childNodes[0].innerHTML='Player-2 total score : 0'
      y=0
      ptr1=0
      ptr2=0
      ptrj1=0
      ptrj2=0
      var count=document.getElementById('tab2').childElementCount
      for(var n=0;n<count;n++){
        document.getElementById('tab2').childNodes[0].remove()
      }
      var tr=document.createElement('tr')
      var td1=document.createElement('td')
      td1.innerHTML='Player-1 selected numbers'
      td1.style.border='1px solid magenta'
      td1.style.color='blue'
      td1.style.fontWeight='bolder'
      td1.style.height='40px'
      td1.style.width='100px'
      td1.style.fontSize='30px'
      td1.style.textAlign='center'
      var td2=document.createElement('td')
      td2.innerHTML='Player-2 selected numbers'
      td2.style.border='1px solid magenta'
      td2.style.color='blue'
      td2.style.fontWeight='bolder'
      td2.style.height='40px'
      td2.style.width='100px'
      td2.style.fontSize='30px'
      td2.style.textAlign='center'
      tr.appendChild(td1)
      tr.appendChild(td2)
      document.getElementById('tab2').appendChild(tr)
      document.getElementById('b').innerHTML='Player-1 has to choose one number from pink box'
      document.getElementById('b').style.color='blue'
      for(var n=0;n<5;n++){
        document.getElementById('btn0'+n.toString()).style.backgroundColor='magenta'
        document.getElementById('btn0'+n.toString()).style.color='white'
      }
    }
    var initial=()=>{
      for(var n=0;n<5;n++){
        document.getElementById('btn0'+n.toString()).style.backgroundColor='magenta'
        document.getElementById('btn0'+n.toString()).style.color='white'
      }
      document.getElementById('visible').remove()
      temp+=1
    }
    var game_rules=(ind)=>{
      if(ind==0){
      document.getElementById('rel1').style.display='none'
      document.getElementById('rel2').style.display='inline-block'
    }
    else{
      document.getElementById('rel1').style.display='inline-block'
      document.getElementById('rel2').style.display='none'
      if(temp!=0){
      document.getElementById('rule_btn1').innerHTML='Continue the game'
      }
    }
  }
   return (
    <div id='a' style={{height:'100%',width:'100%',position:'relative'}}>
      <div id='sheet2' style={{height:'100%',width:'100%',position:'absolute'}}>
      <div id='rel1' style={{height:'100%',width:'100%',backgroundImage:'url(screenshot)'}}>
       <div id='i1' style={{textAlign:'center',fontSize:'40px',fontWeight:'bolder',color:'magenta'}}>Maximum falling path game</div>
       <br/>
       <div id='i2' style={{fontWeight:'bolder',fontSize:'25px',color:'green'}}>&nbsp;&nbsp;Game Rules:</div>
       <ul>
        <li>There is a matrix of 5 rows  & 5 columns which consists of integers</li>
        <li>2 players should be played</li>
        <li>From 1st row to last row,each player should select one number from each row serially such that if a number selected in nth row is from j<sup>th</sup> column then in next row the number should be selected from (j-1)<sup>th</sup> or j<sup>th</sup> or (j+1)<sup>th</sup> column</li>
        <li>For example,In 1<sup>st</sup> row,if the number selected is from 2<sup>nd</sup> column,then in next row number should be selected from any of 1<sup>st</sup> ,2<sup>nd</sup> ,3<sup>rd</sup> columns present in pink box as shown in below picture</li>
       </ul>
       <img src={screenshot} style={{marginLeft:'15px'}}/>
       <ul>
        <li>Winner will be decided by adding the numbers selected by each player from 1<sup>st</sup> row to last row.</li>
        <li>Whoever got more score,they will be declared as winner</li>
       </ul>
       <button id='rule_btn1' onClick={()=>game_rules(0)}>Start the game</button>
      </div>
      <div id='rel2' style={{display:'none'}}>
        <div style={{textAlign:'center',fontSize:'40px',fontWeight:'bolder',color:'magenta'}}>Maximum falling path game</div>
        <br/>
        <button id='rule_btn2' onClick={()=>game_rules(1)}>View Game Rules</button>
      <br/>
      <br/>
      <div id='b' style={{fontWeight:'bolder',marginLeft:'15px',fontSize:'25px',color:'blue'}}>Player-1 has to choose one number from pink box</div>  <br/>
      <div id='x'>
      <div id='z' style={{marginLeft:'20px'}}>
        <table style={{color:'white'}}>
          <tr>
            <td>
      <button style={{backgroundColor:'magenta',color:'white'}}>&nbsp;</button>&nbsp;Numbers which has to be selected
      </td><td>
        <button style={{backgroundColor:'yellow',color:'white'}}>&nbsp;</button>&nbsp;Not selected numbers
        </td>
        </tr>
        <tr><td>
        <button style={{backgroundColor:'blue',color:'white'}}>&nbsp;</button>&nbsp;Player-1 selected numbers
        </td><td>
        <button style={{backgroundColor:'green',color:'white'}}>&nbsp;</button>&nbsp;Player-2 selected numbers
        </td></tr></table>
        </div><br/>
        <div id='flex'>
        <div id ='y' style={{marginLeft:'15px'}}>
      <button id='btn00' onClick={()=>bt(0,0)}>73</button>
      <button id='btn01' onClick={()=>bt(0,1)}>57</button>
      <button id='btn02' onClick={()=>bt(0,2)}>19</button>
      <button id='btn03' onClick={()=>bt(0,3)}>23</button>
      <button id='btn04' onClick={()=>bt(0,4)}>37</button><br/>
      <button id='btn10' onClick={()=>bt(1,0)}>21</button>
      <button id='btn11' onClick={()=>bt(1,1)}>39</button>
      <button id='btn12' onClick={()=>bt(1,2)}>28</button>
      <button id='btn13' onClick={()=>bt(1,3)}>97</button>
      <button id='btn14' onClick={()=>bt(1,4)}>73</button>
      <br/>
      <button id='btn20' onClick={()=>bt(2,0)}>4</button>
      <button id='btn21' onClick={()=>bt(2,1)}>-18</button>
      <button id='btn22' onClick={()=>bt(2,2)}>23</button>
      <button id='btn23' onClick={()=>bt(2,3)}>57</button>
      <button id='btn24' onClick={()=>bt(2,4)}>45</button><br/>
      <button id='btn30' onClick={()=>bt(3,0)}>11</button>
      <button id='btn31' onClick={()=>bt(3,1)}>19</button>
      <button id='btn32' onClick={()=>bt(3,2)}>-63</button>
      <button id='btn33' onClick={()=>bt(3,3)}>26</button>
      <button id='btn34' onClick={()=>bt(3,4)}>7</button><br/>
      <button id='btn40' onClick={()=>bt(4,0)}>43</button>
      <button id='btn41' onClick={()=>bt(4,1)}>53</button>
      <button id='btn42' onClick={()=>bt(4,2)}>35</button>
      <button id='btn43' onClick={()=>bt(4,3)}>23</button>
      <button id='btn44' onClick={()=>bt(4,4)}>31</button><br/>
      <br/>
      </div>
      <table id='tab2' style={{borderSpacing:0,border:'1px solid magenta',marginLeft:'15px',height:'10px',width:'600px'}}>
        <tr>
          <td style={{border:'1px solid magenta',fontWeight:'bolder',color:'blue',height:'40px',width:'300px',fontSize:'30px',textAlign:'center'}}>Player-1 selected numbers</td>
          <td style={{border:'1px solid magenta',fontWeight:'bolder',color:'blue',height:'40px',width:'300px',fontSize:'30px',textAlign:'center'}}>Player-2 selected numbers</td>
        </tr>
      </table>
      </div>
      </div>
      <div id='res' style={{fontWeight:'bolder',color:'magenta',fontSize:'25px'}}></div>
      <table id='tab1' style={{borderSpacing:10,marginLeft:'0px'}}>
        <tr>
          <td style={{fontWeight:'bolder',color:'blue',fontSize:'25px'}}>Player-1 total score : 0</td>
          </tr>
          <tr>
          <td style={{fontWeight:'bolder',color:'green',fontSize:'25px'}}>Player-2 total score : 0</td>
        </tr>
      </table>
      <br/>
      <button id='invisible' style={{marginLeft:'15px',display:'none',width:'200px',height:'100px',fontWeight:'bolder',fontSize:'30px',color:'red',backgroundColor:'yellow'}} onClick={other}>play another game</button>
   </div>
   </div>
   </div>
   )
}
export default App;