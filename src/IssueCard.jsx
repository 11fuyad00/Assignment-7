import React from 'react';
import { toast } from 'react-toastify';

const IssueCard = ({ showData, selectedTask, setSelectedTask, resolved, setResolved, setInProgressCount, setResolvedCount  }) => {
  

  const handleCardClick = (issue) => {
     if (!selectedTask.find(item => item.id === issue.id)) {
       setSelectedTask([...selectedTask, issue]);
       setInProgressCount(oldTask => oldTask + 1);
       toast.success("In-Progress!");

    }
  }

  return (
    <div className='max-w-[1200px] mx-auto my-20 grid grid-cols-12 gap-4 bg-gray-100'>
      {/* Customer Tickets */}
      <div className='col-span-12 md:col-span-9 '>
        <h2 className='text-2xl font-bold mb-4'>Customer Tickets</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {showData.map((card) => (


            <div key={card.id}
              
              onClick={() => handleCardClick(card)}


              className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-lg ">
              
              
              <div className='p-5'>
                
                <div className='flex items-center justify-between'>
                  <h3 className='font-bold'>{card.title}</h3>
              <span className={`px-3 py-1 text-sm rounded-full 
              ${card.status === "Open" ? "bg-green-200 text-green-700" : 
              card.status === "In-Progress" ? "bg-yellow-100 text-yellow-800" : 
             "bg-gray-300 text-gray-700"}`}>
            {card.status}
             </span>
                </div>

                
                <p className='mt-3 text-[#627382]'>{card.description}</p>

                
                <div className='flex mt-4 justify-between items-center'>
                  <h3 className='text-[#627382]'>#{card.id}</h3>
                  <p className='text-[#F83044]'>{card.priority} Priority</p>
                  <span className='text-[#627382]'>{card.customer}</span>
                  <div className='flex items-center gap-1'>
                    <img src="https://i.ibb.co/cX7mQttg/ri-calendar-line.png" alt="calendar" />
                    <span className='text-[#627382]'>{card.date}</span>
                  </div>
                </div>
              </div>
            </div>


          ))}
        </div>
      </div>

     {/* Task status & resolved task*/}
  <div className='col-span-12 md:col-span-3'>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          {/* Task Status */}
          <h2 className="text-2xl font-bold mb-5 -mt-4">Task Status</h2>
     {selectedTask.length > 0 ? (
    selectedTask.map(issue => (
      <div
        key={issue.id}
        className="flex justify-between items-center bg-white p-3 mb-2 rounded-lg shadow-sm"
      >
        <span>{issue.title}</span>
        <button 
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700"
          onClick={() => {

            setSelectedTask(oldTask => 
              oldTask.map(item => item.id === issue.id ? { ...item, status: "Resolved" } : item)
            );
              setResolved(oldTask => 
                      oldTask.map(item => item.id === issue.id ? { ...item, status: "Resolved" } : item)
            );
            setSelectedTask(oldTask => oldTask.filter(item => item.id !== issue.id));
               setInProgressCount(oldTask => oldTask - 1); 
            setResolvedCount(oldTask => oldTask + 1);
            toast.success("Complete!");
          }}
        >
          Complete
        </button>
      </div>
    ))
) : (
    <p className="text-gray-500 italic">Click on a card to add in task status.</p>
)}


    {/* Resolved Task */}
   <h2 className="font-bold text-2xl mt-6 mb-2">Resolved Task</h2>
          {resolved.filter(issue => issue.status === "Resolved").length > 0 ? (
            resolved
              .filter(issue => issue.status === "Resolved")
              .map(issue => (
                <div key={issue.id} className="flex justify-between items-center bg-green-100 p-3 mb-2 rounded-lg shadow-sm">
                  <span>{issue.title}</span>
                  <span className="text-green-700 font-semibold">Done</span>
                </div>
              ))
          ) : (
            <p className="text-gray-500 italic">No resolved tasks yet.</p>
          )}

  </div>
</div>

    </div>
  );
};

export default IssueCard;


