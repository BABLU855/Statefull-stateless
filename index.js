import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

//stateless component
function Header() {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>  
      </ul>
    </header>
  );
}


//statefull component
// class Menu extends React.Component{
//   render(){
//     let menus = [
//       'Home' , 'About us' ,'Contact us'
//     ]
//     return(
//       <header>
//            <ul>
//              <li>{menus[0]}</li>
//              <li>{menus[1]}</li>
//              <li>{menus[2]}</li>  
//             </ul>
//           </header>

//     )
//   }
// }
// root.render(
//   <>
//     <Menu />

//   </>
// );

 root.render(
   <>
     <Header />
     <App />

   </>
 );