import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = props => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(cost => {
    const costDate = new Date(cost.date);
    return costDate.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
