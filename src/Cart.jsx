
// import React from 'react'
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { fields } from './Data/Card';

// const Cart = () => {
//   const tables = [1, 2, 3, 4, 5, 6, 7, 8];

//   return (
//     <div className='w-full max-w-7xl mx-auto px-5 mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>

//       {fields.map((p, index) => (
//         <div
//           key={index}
//           className='w-full rounded-3xl shadow-2xl overflow-hidden bg-white'
//         >

//           {/* Image */}
//           <div className='w-full h-[240px] relative'>

//             <img
//               className='w-full h-full object-cover'
//               src={p.image}
//               alt={p.name}
//             />

//             <div className='absolute top-0 left-0 w-[100px] h-[50px] flex justify-center items-center rounded-br-xl bg-amber-400'>
//               <h1 className='text-3xl text-white'>
//                 {p.type}
//               </h1>
//             </div>

//           </div>

//           {/* Name */}
//           <div className='p-5'>

//             <h1 className='text-2xl font-bold'>
//               {p.name}
//             </h1>

//             {/* Location */}
//             <div className='flex items-center mt-4 gap-3'>

//               <FaMapMarkerAlt className='text-2xl text-gray-600'/>

//               <h1 className='text-lg'>
//                 {p.location}
//               </h1>

//             </div>

//             {/* Price */}
//             <div className='flex items-center flex-wrap gap-2 mt-4'>

//               <h1 className='text-2xl font-bold'>
//                 {p.price}
//               </h1>

//               <h1 className='text-xl'>/</h1>

//               <h1 className='text-lg'>
//                 hour
//               </h1>

//               <del className='text-xl font-bold text-gray-400 ml-2'>
//                 {p.oldPrice}
//               </del>

//             </div>

//             {/* Tables */}
//             <div className='grid grid-cols-4 gap-3 mt-6'>

//               {tables.map((table) => (
//                 <button
//                   key={table}
//                   className='w-full h-14 flex justify-center items-center text-xl bg-blue-200 border-2 border-blue-300 rounded-xl hover:border-green-500 hover:bg-green-100 transition-all duration-200'
//                 >
//                   {table}
//                 </button>
//               ))}

//             </div>

//             {/* Buttons */}
//             <div className='grid grid-cols-2 gap-3 mt-7'>

//               <button className='w-full h-14 rounded-xl shadow-lg text-sm sm:text-base text-green-500 hover:scale-105 transition-all duration-200 bg-white border border-green-400'>
//                 View Reviews
//               </button>

//               <button className='w-full h-14 rounded-xl shadow-lg text-sm sm:text-base text-white hover:scale-105 transition-all duration-200 bg-green-400'>
//                 Book Now
//               </button>

//             </div>

//           </div>

//         </div>
//       ))}

//     </div>
//   )
// }

// export default Cart




// import React, { useState } from 'react'
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { fields } from './Data/Card';


// const tables = [1, 2, 3, 4, 5, 6, 7, 8];

//   const confirmBooking = () => {
//     const newBooking = {
//       id: Date.now(),
//       fieldName: booking.field.name,
//       type: booking.field.type,
//       location: booking.field.location,
//       price: booking.field.price,
//       table: booking.table,
//       createdAt: new Date().toISOString(),
//     };
//     setBookings([...bookings, newBooking]);
//     setConfirmed(true);
//   };

// /* ===== Card មួយៗ (មាន state ផ្ទាល់ខ្លួន) ===== */
// const FieldCard = ({ p, onBook }) => {
//   const [selected, setSelected] = useState(null);

//   const toggleTable = (table) => {
//     setSelected(selected === table ? null : table);
//   };

//   return (
//     <div className='w-full rounded-3xl shadow-2xl overflow-hidden bg-white'>

//       {/* Image */}
//       <div className='w-full h-[240px] relative'>
//         <img className='w-full h-full object-cover' src={p.image} alt={p.name} />
//         <div className='absolute top-0 left-0 w-[100px] h-[50px] flex justify-center items-center rounded-br-xl bg-amber-400'>
//           <h1 className='text-3xl text-white'>{p.type}</h1>
//         </div>
//       </div>

//       <div className='p-5'>
//         <h1 className='text-2xl font-bold'>{p.name}</h1>

//         {/* Location */}
//         <div className='flex items-center mt-4 gap-3'>
//           <FaMapMarkerAlt className='text-2xl text-gray-600' />
//           <h1 className='text-lg'>{p.location}</h1>
//         </div>

//         {/* Price */}
//         <div className='flex items-center flex-wrap gap-2 mt-4'>
//           <h1 className='text-2xl font-bold'>{p.price}</h1>
//           <h1 className='text-xl'>/</h1>
//           <h1 className='text-lg'>hour</h1>
//           <del className='text-xl font-bold text-gray-400 ml-2'>{p.oldPrice}</del>
//         </div>

//         {/* Tables */}
//         <div className='grid grid-cols-4 gap-3 mt-6'>
//           {tables.map((table) => {
//             const isActive = selected === table;
//             return (
//               <button
//                 key={table}
//                 onClick={() => toggleTable(table)}
//                 className={`w-full h-14 flex justify-center items-center text-xl border-2 rounded-xl transition-all duration-200
//                   ${isActive
//                     ? 'bg-green-400 border-green-600 text-white scale-105 shadow-lg'
//                     : 'bg-blue-200 border-blue-300 hover:border-green-500 hover:bg-green-100'}`}
//               >
//                 {table}
//               </button>
//             );
//           })}
//         </div>

//         {/* សារបង្ហាញតារាងដែលបានរើស */}
//         <p className='mt-4 text-sm text-gray-500 h-5'>
//           {selected ? `បានរើសតារាងលេខ ${selected}` : 'សូមរើសលេខតារាង'}
//         </p>

//         {/* Buttons */}
//         <div className='grid grid-cols-2 gap-3 mt-3'>
//           <button className='w-full h-14 rounded-xl shadow-lg text-sm sm:text-base text-green-500 hover:scale-105 transition-all duration-200 bg-white border border-green-400'>
//             View Reviews
//           </button>

//           <button
//             disabled={!selected}
//             onClick={() => onBook(p, selected)}
//             className={`w-full h-14 rounded-xl shadow-lg text-sm sm:text-base text-white transition-all duration-200
//               ${selected
//                 ? 'bg-green-400 hover:scale-105 cursor-pointer'
//                 : 'bg-gray-300 cursor-not-allowed'}`}
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ===== Component ធំ ===== */
// const Cart = () => {
//   const [booking, setBooking] = useState(null);   // { field, table }
//   const [confirmed, setConfirmed] = useState(false);

//   const handleBook = (field, table) => {
//     setConfirmed(false);
//     setBooking({ field, table });
//   };

//   const closeModal = () => setBooking(null);

//   const confirmBooking = () => {
//     // 👉 ដាក់ API call នៅទីនេះ ឧ. axios.post('/api/bookings', {...})
//     console.log('Booked:', booking);
//     setConfirmed(true);
//   };

//   return (
//     <div className='w-full max-w-7xl mx-auto px-5 mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>

//       {fields.map((p, index) => (
//         <FieldCard key={index} p={p} onBook={handleBook} />
//       ))}

//       {/* ===== Modal បញ្ជាក់ការកក់ ===== */}
//       {booking && (
//         <div
//           className='fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-5'
//           onClick={closeModal}
//         >
//           <div
//             className='bg-white rounded-3xl p-7 w-full max-w-md shadow-2xl'
//             onClick={(e) => e.stopPropagation()}
//           >
//             {!confirmed ? (
//               <>
//                 <h2 className='text-2xl font-bold mb-4'>បញ្ជាក់ការកក់</h2>

//                 <div className='space-y-2 text-lg'>
//                   <p><span className='text-gray-500'>ក្លឹប:</span> {booking.field.name}</p>
//                   <p><span className='text-gray-500'>ប្រភេទ:</span> {booking.field.type}</p>
//                   <p><span className='text-gray-500'>ទីតាំង:</span> {booking.field.location}</p>
//                   <p><span className='text-gray-500'>តារាងលេខ:</span> {booking.table}</p>
//                   <p><span className='text-gray-500'>តម្លៃ:</span> {booking.field.price} / hour</p>
//                 </div>

//                 <div className='grid grid-cols-2 gap-3 mt-7'>
//                   <button
//                     onClick={closeModal}
//                     className='h-12 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100'
//                   >
//                     បោះបង់
//                   </button>
//                   <button
//                     onClick={confirmBooking}
//                     className='h-12 rounded-xl bg-green-400 text-white hover:bg-green-500'
//                   >
//                     បញ្ជាក់
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className='text-center'>
//                 <div className='text-6xl mb-3'>✅</div>
//                 <h2 className='text-2xl font-bold mb-2'>កក់បានជោគជ័យ!</h2>
//                 <p className='text-gray-600 mb-6'>
//                   តារាងលេខ {booking.table} នៅ {booking.field.name} ({booking.field.type})
//                 </p>
//                 <button
//                   onClick={closeModal}
//                   className='w-full h-12 rounded-xl bg-green-400 text-white hover:bg-green-500'
//                 >
//                   បិទ
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//     </div>
//   )
// }

// export default Cart

import React, { useState, useEffect } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { fields } from './Data/Card';

const tables = [1, 2, 3, 4, 5, 6, 7, 8];

/* ===== Card មួយៗ (មាន state ផ្ទាល់ខ្លួន) ===== */
const FieldCard = ({ p, onBook, bookings }) => {
  const [selected, setSelected] = useState(null);

  // តារាងនេះត្រូវបានកក់រួចហើយឬនៅ?
  const isBooked = (table) =>
    bookings.some((b) => b.type === p.type && b.table === table);

  const toggleTable = (table) => {
    setSelected(selected === table ? null : table);
  };

  return (
    <div className='w-full rounded-3xl shadow-2xl overflow-hidden bg-white'>

      {/* Image */}
      <div className='w-full h-[240px] relative'>
        <img className='w-full h-full object-cover' src={p.image} alt={p.name} />
        <div className='absolute top-0 left-0 w-[100px] h-[50px] flex justify-center items-center rounded-br-xl bg-amber-400'>
          <h1 className='text-3xl text-white'>{p.type}</h1>
        </div>
      </div>

      <div className='p-5'>
        <h1 className='text-2xl font-bold'>{p.name}</h1>

        {/* Location */}
        <div className='flex items-center mt-4 gap-3'>
          <FaMapMarkerAlt className='text-2xl text-gray-600' />
          <h1 className='text-lg'>{p.location}</h1>
        </div>

        {/* Price */}
        <div className='flex items-center flex-wrap gap-2 mt-4'>
          <h1 className='text-2xl font-bold'>{p.price}</h1>
          <h1 className='text-xl'>/</h1>
          <h1 className='text-lg'>hour</h1>
          <del className='text-xl font-bold text-gray-400 ml-2'>{p.oldPrice}</del>
        </div>

        {/* Tables */}
        <div className='grid grid-cols-4 gap-3 mt-6'>
          {tables.map((table) => {
            const isActive = selected === table;
            const booked = isBooked(table);

            return (
              <button
                key={table}
                disabled={booked}
                onClick={() => toggleTable(table)}
                className={`w-full h-14 flex justify-center items-center text-xl border-2 rounded-xl transition-all duration-200
                  ${booked
                    ? 'bg-gray-300 border-gray-400 text-gray-500 cursor-not-allowed line-through'
                    : isActive
                    ? 'bg-green-400 border-green-600 text-white scale-105 shadow-lg'
                    : 'bg-blue-200 border-blue-300 hover:border-green-500 hover:bg-green-100'}`}
              >
                {table}
              </button>
            );
          })}
        </div>

        {/* សារបង្ហាញតារាងដែលបានរើស */}
        <p className='mt-4 text-sm text-gray-500 h-5'>
          {selected ? `បានរើសតារាងលេខ ${selected}` : 'សូមរើសលេខតារាង'}
        </p>

        {/* Buttons */}
        <div className='grid grid-cols-2 gap-3 mt-3'>
          <button className='w-full h-14 rounded-xl shadow-lg text-sm sm:text-base text-green-500 hover:scale-105 transition-all duration-200 bg-white border border-green-400'>
            View Reviews
          </button>

          <button
            disabled={!selected}
            onClick={() => {
              onBook(p, selected);
            }}
            className={`w-full h-14 rounded-xl shadow-lg text-sm sm:text-base text-white transition-all duration-200
              ${selected
                ? 'bg-green-400 hover:scale-105 cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===== Component ធំ ===== */
const Cart = () => {
  const [booking, setBooking] = useState(null);   // { field, table }
  const [confirmed, setConfirmed] = useState(false);

  // ទាញទិន្នន័យពី localStorage ពេលបើកទំព័រ
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // រក្សាទុកគ្រប់ពេល bookings ប្ដូរ
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const handleBook = (field, table) => {
    setConfirmed(false);
    setBooking({ field, table });
  };

  const closeModal = () => setBooking(null);

  const confirmBooking = () => {
    const newBooking = {
      id: Date.now(),
      fieldName: booking.field.name,
      type: booking.field.type,
      location: booking.field.location,
      price: booking.field.price,
      table: booking.table,
      createdAt: new Date().toISOString(),
    };
    setBookings([...bookings, newBooking]);
    setConfirmed(true);
  };

  return (
    <div className='w-full max-w-7xl mx-auto px-5 mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>

      {fields.map((p, index) => (
        <FieldCard
          key={index}
          p={p}
          onBook={handleBook}
          bookings={bookings}
        />
      ))}

      {/* ===== Modal បញ្ជាក់ការកក់ ===== */}
      {booking && (
        <div
          className='fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-5'
          onClick={closeModal}
        >
          <div
            className='bg-white rounded-3xl p-7 w-full max-w-md shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            {!confirmed ? (
              <>
                <h2 className='text-2xl font-bold mb-4'>បញ្ជាក់ការកក់</h2>

                <div className='space-y-2 text-lg'>
                  <p><span className='text-gray-500'>ក្លឹប:</span> {booking.field.name}</p>
                  <p><span className='text-gray-500'>ប្រភេទ:</span> {booking.field.type}</p>
                  <p><span className='text-gray-500'>ទីតាំង:</span> {booking.field.location}</p>
                  <p><span className='text-gray-500'>តារាងលេខ:</span> {booking.table}</p>
                  <p><span className='text-gray-500'>តម្លៃ:</span> {booking.field.price} / hour</p>
                </div>

                <div className='grid grid-cols-2 gap-3 mt-7'>
                  <button
                    onClick={closeModal}
                    className='h-12 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100'
                  >
                    បោះបង់
                  </button>
                  <button
                    onClick={confirmBooking}
                    className='h-12 rounded-xl bg-green-400 text-white hover:bg-green-500'
                  >
                    បញ្ជាក់
                  </button>
                </div>
              </>
            ) : (
              <div className='text-center'>
                <div className='text-6xl mb-3'>✅</div>
                <h2 className='text-2xl font-bold mb-2'>កក់បានជោគជ័យ!</h2>
                <p className='text-gray-600 mb-6'>
                  តារាងលេខ {booking.table} នៅ {booking.field.name} ({booking.field.type})
                </p>
                <button
                  onClick={closeModal}
                  className='w-full h-12 rounded-xl bg-green-400 text-white hover:bg-green-500'
                >
                  បិទ
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  )
}

export default Cart