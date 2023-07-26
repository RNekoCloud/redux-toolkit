import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Store/counterSlice";

export const Counter = () => {
   const count = useSelector((state: any) => state.counter.count);
   const dispatch = useDispatch();

   const handleIncrement = () => {
      dispatch(increment());
   };

   const handleDecrement = () => {
      dispatch(decrement());
   };

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={handleIncrement}>Increment</button>
         <button onClick={handleDecrement}>Decrement</button>
      </div>
   );
};
