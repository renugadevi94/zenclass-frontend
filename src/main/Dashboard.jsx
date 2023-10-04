import React, { useState, useEffect, useContext } from 'react';
import "./dashboard.css";
import Linechart from '../components/Linechart';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const Dashboard = () => {

    const { loggedUser,
        fetchTask,
        DBTask,
        setDBTask,
        webCode,
        fetchWebcode,
        capStone,
        fetchCapStone, } = useContext(DataContext);

    const [chartData, setChartData] = useState(
        {
            labels: DBTask.map((data) => data.title),
            datasets: [{
                label: "Task Score",
                data: DBTask.map((data) => data.score),
                backgroundColor: "#4b0dba",
                borderJoinStyle: "round"
            }]
        }
    )

    useEffect(() => {
        fetchTask();
        fetchWebcode();
        fetchCapStone();
    }, []);

    useEffect(() => {
        setChartData(
            {
                labels: DBTask.map((data) => `Day-${data.day}`),
                datasets: [{
                    label: "Task Score",
                    data: DBTask.map((data) => data.score),
                    backgroundColor: "#4b0dba",
                    borderJoinStyle: "round"
                }]
            }
        )
    }, [DBTask, setDBTask])

    return (
        <section className='dashboard pt-2'>
            <div className='activities__box container'>
                <h3 className='text-center p-2'>Activities</h3>
                <div className='problem__solved gap-5'>
                    <div className="codekata">
                        <div className="head">CodeKata Problem Solved</div>
                        <div className="score text-center">{loggedUser.codeKata}</div>
                    </div>
                    <div className="webkata">
                        <div className="head ">WebKata Problem Solved</div>
                        <div className="score text-center">{loggedUser.webKata}</div>
                    </div>
                </div>
            </div>
            <br />
            <div className='activities__box container'>
                <h3 className='text-center p-2'>Task Status</h3>
                <Linechart chartData={chartData} />
            </div>
            <br />
            <div className='activities__box container'>
                <h3 className='text-center p-2'>Event Status</h3>
                <div className='problem__solved gap-5'>
                    <div className="codekata">
                        <div className="head">Webcode-1 Score</div>
                        <div className="score text-center">
                            {
                                webCode ?
                                    webCode.score :
                                    "Not Submitted"
                            }
                        </div>
                        <div className='text-center mb-2'>
                            <Link to="/webcode" className='view__btn'>
                                View
                            </Link>
                        </div>
                    </div>
                    <div className="webkata">
                        <div className="head ">Capstone-1 Score</div>
                        <div className="score text-center">
                            {
                                capStone ?
                                    capStone.score :
                                    "Not Submitted"
                            }
                        </div>
                        <div className='text-center mb-2'>
                            <Link to="/capstone" className='view__btn'>
                                View
                            </Link>
                        </div>
                    </div>
                    <div className="webkata">
                        <div className="head ">Mock Interview Avg</div>
                        <div className="score text-center">{loggedUser.mockInterview}</div>
                        <div className='text-center mb-2'>
                            <Link to="/mock" className='view__btn'>
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;








// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Linechart from '../components/Linechart';
// import DataContext from '../context/DataContext';
// //import "./dashboard.css";
// const Dashboard = () => {
//   const {
//     loggedUser,
//     fetchTask,
//     DBTask,
//     setDBTask,
//     webCode,
//     fetchWebcode,
//     capStone,
//     fetchCapStone,
//   } = useContext(DataContext);

//   const [chartData, setChartData] = useState({
//     labels: DBTask.map((data) => `Day-${data.day}`),
//     datasets: [
//       {
//         label: 'Task Score',
//         data: DBTask.map((data) => data.score),
//         backgroundColor: 'rgba(75, 13, 186, 0.2)', // Background color for the line
//         borderColor: 'rgba(75, 13, 186, 1)', // Line color
//         borderWidth: 2, // Line width
//         pointRadius: 4, // Point size
//         pointBackgroundColor: 'rgba(75, 13, 186, 1)', // Point color
//       },
//     ],
//   });

//   useEffect(() => {
//     fetchTask();
//     fetchWebcode();
//     fetchCapStone();
//   }, []);

//   useEffect(() => {
//     setChartData({
//       labels: DBTask.map((data) => `Day-${data.day}`),
//       datasets: [
//         {
//           label: 'Task Score',
//           data: DBTask.map((data) => data.score),
//           backgroundColor: 'rgba(75, 13, 186, 0.2)',
//           borderColor: 'rgba(75, 13, 186, 1)',
//           borderWidth: 2,
//           pointRadius: 4,
//           pointBackgroundColor: 'rgba(75, 13, 186, 1)',
//         },
//       ],
//     });
//   }, [DBTask, setDBTask]);

//   return (
//     <section className="dashboard pt-2">
//       <div className="activities__box container">
//         <h3 className="text-center p-2">Activities</h3>
//         <div className='problem__solved gap-5'>
//                     <div className="codekata">
//                         <div className="head">CodeKata Problem Solved</div>
//                         <div className="score text-center">{loggedUser.codeKata}</div>
//                     </div>
//                     <div className="webkata">
//                         <div className="head ">WebKata Problem Solved</div>
//                         <div className="score text-center">{loggedUser.webKata}</div>
//                     </div>
//                 </div>
//       </div>
//       <br />
//       <div className="activities__box container">
//         <h3 className="text-center p-2">Task Status</h3>
//         <Linechart data={chartData} height={100} /> {/* Use Line chart */}
//       </div>
//       <br />
//       <div className="activities__box container">
//         <h3 className="text-center p-2">Event Status</h3>
//         <div className='problem__solved gap-5'>
//                     <div className="codekata">
//                         <div className="head">Webcode-1 Score</div>
//                         <div className="score text-center">
//                             {
//                                 webCode ?
//                                     webCode.score :
//                                     "Not Submitted"
//                             }
//                         </div>
//                         <div className='text-center mb-2'>
//                             <Link to="/webcode" className='view__btn'>
//                                 View
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="webkata">
//                         <div className="head ">Capstone-1 Score</div>
//                         <div className="score text-center">
//                             {
//                                 capStone ?
//                                     capStone.score :
//                                     "Not Submitted"
//                             }
//                         </div>
//                         <div className='text-center mb-2'>
//                             <Link to="/capstone" className='view__btn'>
//                                 View
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="webkata">
//                         <div className="head ">Mock Interview Avg</div>
//                         <div className="score text-center">{loggedUser.mockInterview}</div>
//                         <div className='text-center mb-2'>
//                             <Link to="/mock" className='view__btn'>
//                                 View
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;













