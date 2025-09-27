import React, { use } from 'react';
import IssueCard from '../../IssueCard';

const CustomarTickets = ({ dataPromise, selectedTask, setSelectedTask, resolved, setResolved,inProgressCount, setInProgressCount, resolvedCount, setResolvedCount }) => {
  const showData = use(dataPromise);
  console.log(showData);

  return (
  <IssueCard setResolvedCount ={setResolvedCount} resolvedCount ={resolvedCount} setInProgressCount ={setInProgressCount} inProgressCount ={inProgressCount} setResolved ={setResolved} resolved ={resolved} setSelectedTask ={setSelectedTask} selectedTask ={selectedTask} showData={showData}></IssueCard>
  );
};

export default CustomarTickets;
