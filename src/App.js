import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs';
import { useDispatch, useSelector } from 'react-redux';
import { selectExpenseParams } from './redux/selector';
import { addExpense } from './redux/expenseSlice';

const App = () => {
  const expenseParams = useSelector(selectExpenseParams);

  const dispatch = useDispatch();

  const addCostHandler = cost => {
    dispatch(addExpense(cost));
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={expenseParams} />
    </div>
  );
};

export default App;
