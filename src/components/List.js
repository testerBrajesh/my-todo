// import { Table } from "react-bootstrap";
// import React from "react";

// export const List = ({ items, removeItem, editItem }) => {
//   console.log(items); // This is fine for debugging purposes

//   return (
//     <div>
//       {/* Correctly return JSX from map */}
//       <Table striped hover>
//         <thead>
//           <th>Task Name</th>
//           <th>Task Operations</th>
//         </thead>
//         <tbody>
//           {items.map((item) => {
//             const { title, id } = item;
//             return (
//               <tr  key={id}>
//                 <td>
                
//                   {title}
//                 </td>
//                 <td>
//                   <button onClick={() => editItem(id)}> edit</button>
//                   <button onClick={() => removeItem(id)}> delete</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default List;

import { Table } from 'react-bootstrap';
import React from 'react';
import {FaEdit,FaTrash} from 'react-icons/fa'

export const List = ({ items, removeItem, editItem }) => {
  console.log(items); // Debugging purposes

  return (
    <div>
      <Table striped hover  >
        <tbody>
          {items.map((item) => {
            const { title, id } = item;
            return (
              <tr key={id}>
                <td>{title}</td>
                <td>
                  <button  onClick={() => editItem(id)}><FaEdit/></button>
                  <button onClick={() => removeItem(id)}><FaTrash /></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default List;





