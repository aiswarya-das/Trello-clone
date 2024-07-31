// "use client";
// import { useState } from "react";
// import { DndContext } from "../../../context/DndContext";
// import TaskBoard from "@/components/TaskBoard";
// import { DropResult } from "react-beautiful-dnd";

// interface Task {
//   id: string;
//   title: string;
//   status: string;
//   priority: string;
//   deadline: string;
// }

// const DashboardPage: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([
//     { id: '1', title: 'Implement User Authentication', status: 'To-Do', priority: 'Urgent', deadline: '2024-08-15' },
//     { id: '2', title: 'Design Home Page UI', status: 'In Progress', priority: 'Medium', deadline: '2024-08-15' },
//     { id: '3', title: 'Integrate Cloud Storage', status: 'Under Review', priority: 'Urgent', deadline: '2024-08-20' },
//     { id: '4', title: 'Test Cross-browser Compatibility', status: 'Completed', priority: 'Medium', deadline: '2024-07-30' },
//   ]);

//   const onDragEnd = (result: DropResult) => {
//     if (!result.destination) return;

//     const { source, destination } = result;

//     const updatedTasks = Array.from(tasks);
//     const [movedTask] = updatedTasks.splice(source.index, 1);

//     movedTask.status = destination.droppableId;
//     updatedTasks.splice(destination.index, 0, movedTask);

//     setTasks(updatedTasks);
//   };

//   return (
//     <DndContext onDragEnd={onDragEnd}>
//       <TaskBoard tasks={tasks} />
//     </DndContext>
//   );
// };

// export default DashboardPage;

// export default DashboardPage;


// "use client";
// import Draggable from 'react-draggable';

// const DraggableComponents = () => {
//   return (
//     <div className="text-center p-5">
//       <h3 className="text-lg font-bold mb-4">GeeksforGeeks - Draggable Components</h3>
//       <Draggable>
//         <div className="w-48 h-24 bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center cursor-move shadow-md mx-auto">
//           We can move this text
//         </div>
//       </Draggable>
//       <Draggable>
//         <div className="w-48 h-24 bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center cursor-move shadow-md mx-auto mt-4">
//           Move me!
//         </div>
//       </Draggable>
//     </div>
//   );
// };

// export default DraggableComponents;

// // "use client";
// // import axios from "axios"
// // import Link from "next/link"
// // import toast from "react-hot-toast";
// // import { useRouter } from "next/navigation";
// // import { useState } from "react";
// // import { DragDropContext } from 'react-beautiful-dnd';
// // import Dashboard from "@/components/Dashboard";
// // // import {Task} from '@/types';

// // export default function DashboardPage(){
// //   const router = useRouter()
// //   const [data,setData] = useState("nothing")
// //   const logout = async () =>{
// // try {
// //   await axios.get('/api/users/logout')
// //   toast.success('Logout successful')
// //   router.push('/login')
// // } catch (error:any) {
// //   console.log(error.message)
// //   toast.error(error.response?.data?.error || "An error occurred");
// // }

// //   }
// //   const getUserDetails = async () => {
// //     const res = await axios.get('/api/users/me')
// //     console.log(res.data);
// //     setData(res.data.data.password)
// // }
// //   return(
// //     <main>
// //     <div className="flex items-center justify-between mb-6">
// //        <h1 className="text-3xl font-bold">
// //           Porter - Lightweight Task Manager
// //         </h1>
// //     </div>
// //       <Dashboard/>
// //       <div className="my-3 min-w-fit flex flex-col items-end">
// //         <h3 className="hidden lg:flex font-bold mb-2">Shortcuts</h3>
// //         <div className="hidden lg:flex items-center gap-1 text-sm font-medium ">
// //           <span className="mr-3">- New Task</span>
// //           <kbd className="pointer-events-none select-none  rounded border px-1 leading-none text-white text-xl bg-slate-950 border-slate-950">
// //             ⌘
// //           </kbd>
// //           <kbd className="pointer-events-none select-none  rounded border px-1.5 text-white bg-slate-950 border-slate-950">
// //             K
// //           </kbd>
// //         </div>
// //         <div className="hidden lg:flex items-center gap-1 text-sm font-medium mt-1">
// //           <span className="mr-3">- Close Task Form</span>
// //           <kbd className="pointer-events-none select-none  rounded border px-1.5 text-white bg-slate-950 border-slate-950">
// //             Esc
// //           </kbd>
// //         </div>
// //       </div>
// //     </main>

// //   )
// //   // const [tasks, setTasks] = useState<Task[]>([]);
// //   // const router = useRouter();
  
// //   // return (
// //   //   <div className="grid grid-cols-4 gap-4 p-4">
// //   //     {['To-Do', 'In Progress', 'Under Review', 'Completed'].map((status) => (
// //   //       <TaskColumn key={status} status={status} tasks={tasks.filter(task => task.status === status)} />
// //   //     ))}
// //   //   </div>
// //   // );
// // }

// "use client";
// import DndExample from "@/components/DndExample";
// export default function TaskBoard() {
//   return (
//     <div>
//       <DndExample />
//     </div>
//   )
// }


"use client";
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DndExample from "@/components/DndExample";
export default function DashboardPage(){
  const router = useRouter()
  const [data,setData] = useState("nothing")
  const logout = async () =>{
try {
  await axios.get('/api/users/logout')
  toast.success('Logout successful')
  router.push('/login')
} catch (error:any) {
  console.log(error.message)
  toast.error(error.response?.data?.error || "An error occurred");
}

  }
  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data);
    setData(res.data.data._id)
}
  return(
<div><center>
      <h1><center>Welcome to dashboard!</center></h1>
      {/* <h2>{data === 'nothing' ? "Nothing" : <Link href={`/dashboard/${data}`}>{data}
            </Link>}</h2> */}
      <hr/>
      <button onClick={logout}>Logout</button>
      {/* <button
        onClick={getUserDetails}
        >GetUser Details</button> */}
       <div><DndExample /></div>
      </center>
  </div>
  )
}