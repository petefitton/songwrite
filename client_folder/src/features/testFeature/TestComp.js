import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { text: state.testerooni };
};
  
const ConnectedText = ({ text }) => (
    <p>
        {text}
    </p>
);


export const TestComp = connect(mapStateToProps)(ConnectedText)








// import { useDispatch } from 'react-redux';
// import store from '../../app/store'
// import { updateTester } from '../../actions'

// import {
    // selectCount,
// } from '../counter/counterSlice';

// export function TestComp(props) {
// //   const count = useSelector(selectCount);
// //   const dispatch = useDispatch();
// //   const [incrementAmount, setIncrementAmount] = useState('2');

// //   const dispatch = useDispatch()
// //   let textum = store.getState().testerooni

//   return (
//     <div>
        
//         {/* <p> */}
//             {/* {props.text} */}
//             {/* {store.subscribe(() => dispatch(updateTester()))} */}
//         {/* </p> */}
//         {/* <p>RUL TEST</p> */}
//         {/* <p>{count}</p> */}
//       {/* <div className={styles.row}>
//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//       </div>
//       <div className={styles.row}>
//         <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={e => setIncrementAmount(e.target.value)}
//         />
//         <button
//           className={styles.button}
//           onClick={() =>
//             dispatch(incrementByAmount(Number(incrementAmount) || 0))
//           }
//         >
//           Add Amount
//         </button>
//         <button
//           className={styles.asyncButton}
//           onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
//         >
//           Add Async
//         </button>
//       </div> */}
//     </div>
//   );
// }
