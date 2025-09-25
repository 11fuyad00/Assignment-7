import React, { use } from 'react';

const CustomarTickets = ({ dataPromise }) => {
  const showData = use(dataPromise);
  console.log(showData);

  return (
    <div className='max-w-[1200px] mx-auto my-20 grid grid-cols-12 gap-4 bg-gray-100'>
      {/* Customer Tickets - 9 ভাগ */}
      <div className='col-span-12 md:col-span-9 '>
        <h2 className='text-2xl font-bold mb-4'>Customer Tickets</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {showData.map((card) => (


            <div key={card.id} className="bg-white shadow-md rounded-lg p-4 ">
              <div className='p-5'>
                {/* Header */}
                <div className='flex items-center justify-between'>
                  <h3 className='font-bold'>{card.title}</h3>
              <span className={`px-3 py-1 text-sm rounded-full 
              ${card.status === "Open" ? "bg-green-200 text-green-700" : 
              card.status === "In-Progress" ? "bg-yellow-100 text-yellow-700" : 
             "bg-gray-100 text-gray-700"}`}>
            {card.status}
             </span>
                </div>

                {/* Description */}
                <p className='mt-3 text-[#627382]'>{card.description}</p>

                {/* Footer */}
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

      {/* Task Status - 4 ভাগ */}
      <div className='col-span-12 md:col-span-3'>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="font-bold text-lg mb-2">Task Status</h2>
          {showData
            .filter(issue => issue.status === "Open")
            .map(issue => (
              <div
                key={issue.id}
                className="flex justify-between items-center bg-white p-3 mb-2 rounded-lg shadow-sm"
              >
                <span>{issue.title}</span>
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">
                  Complete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomarTickets;
