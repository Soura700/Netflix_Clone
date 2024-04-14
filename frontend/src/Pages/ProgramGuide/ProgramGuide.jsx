// // import React from "react";

// // const ProgramGuide = () => {
// //   const profiles = [
// //     { id: 1, name: "John", avatar: "https://via.placeholder.com/50" },
// //     { id: 2, name: "Emma", avatar: "https://via.placeholder.com/50" },
// //     { id: 3, name: "Alex", avatar: "https://via.placeholder.com/50" },
// //     { id: 4, name: "Alex", avatar: "https://via.placeholder.com/50" },
// //     { id: 5, name: "Alex", avatar: "https://via.placeholder.com/50" },
// //   ];

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen text-white">
// //       <h1 className="text-2xl font-bold mb-4">Who's Watching?</h1>
// //       <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
// //         {profiles.map((profile) => (
// //           <div key={profile.id} className="flex flex-col items-center">
// //             <img
// //               src={profile.avatar}
// //               alt={profile.name}
// //               className="rounded-lg w-24 h-24 mb-2"
// //             />
// //             <span className="text-sm">{profile.name}</span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProgramGuide;


// import React from "react";

// const ProgramGuide = () => {
//   const profiles = [
//     { id: 1, name: "John", avatar: "https://via.placeholder.com/50" },
//     { id: 2, name: "Emma", avatar: "https://via.placeholder.com/50" },
//     { id: 3, name: "Alex", avatar: "https://via.placeholder.com/50" },
//     { id: 4, name: "Alex", avatar: "https://via.placeholder.com/50" },
//     { id: 5, name: "Alex", avatar: "https://via.placeholder.com/50" },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center h-screen text-white">
//       {/* Logo displayed before the heading */}
//       <div className="block sm:hidden mb-4">
//         <img
//           src="path/to/your/logo.png"
//           alt="Logo"
//           className="w-24 h-24 mb-2"
//         />
//       </div>
//       <h1 className="text-2xl font-bold mb-4">Who's Watching?</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
//         {profiles.map((profile) => (
//           <div key={profile.id} className="flex flex-col items-center">
//             <img
//               src={profile.avatar}
//               alt={profile.name}
//               className="rounded-lg w-24 h-24 mb-2"
//             />
//             <span className="text-sm">{profile.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ProgramGuide;
import React from "react";

const ProgramGuide = () => {
  const profiles = [
    { id: 1, name: "John", avatar: "https://via.placeholder.com/50" },
    { id: 2, name: "Emma", avatar: "https://via.placeholder.com/50" },
    { id: 3, name: "Alex", avatar: "https://via.placeholder.com/50" },
    { id: 4, name: "Alex", avatar: "https://via.placeholder.com/50" },
    { id: 5, name: "Alex", avatar: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      {/* Logo displayed before the heading */}
      <div className="block sm:hidden mb-4">
        <img
          src="path/to/your/logo.png"
          alt="Logo"
          className="w-24 h-24 mb-2"
        />
      </div>
      <h1 className="text-2xl font-bold mb-10">Who's Watching?</h1> {/* Increased margin-bottom to mb-8 */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex flex-col items-center">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="rounded-lg w-32 h-32 mb-2" // Increased size to w-32 and h-32
            />
            <span className="text-sm">{profile.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramGuide;
