import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';
import { UserContext } from '../../UserContext';

const Assignments = () => {
    const { pathname } = useLocation();
    const { auth } = useContext(UserContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    const [assignments, setAssignments] = useState([]);
    const [gradeData, setGradeData] = useState([]);
    const location = useLocation();
    const { courseTitle, courseId } = location.state || {};

    useEffect(() => {
        if (courseTitle) {
            const fetchAssignments = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/enrollments/${courseTitle}/assignments`);
                    setAssignments(response.data.data || []);
                } catch (error) {
                    console.error('Error fetching assignments:', error);
                }
            };
            fetchAssignments();
        }
    }, [courseTitle]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (courseId && auth.id) {
                    const response = await axios.get(`http://127.0.0.1:8000/api/showOneStudentGrades/${auth.id}/${courseId}`);
                    setGradeData(response.data.data || []);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [auth.id, courseId]);

    // Function to get grade for a specific assignment
    const getGradeForAssignment = (assignmentTitle) => {
        const gradeItem = gradeData.find(item => item.assignmentTitle === assignmentTitle);
        return gradeItem ? gradeItem.grade : 'No degree yet';
    };

    return (
        <div>
            <Navbar />
            <div className="container assignments">
                <div className="row">
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="images/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Assignments</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="images/banner.png" alt="title-all" />
                    </div>

                    <h3 className='mb-5'>Assignments for <span className='main-title fw-light'>{courseTitle}</span></h3>
                    <div className="table-responsive table-center mb-5">
                        <table className="table text-primary text-center">
                            <thead>
                                <tr>
                                    <th>Assignment Title</th>
                                    <th>Assignment Description</th>
                                    <th>Deadline</th>
                                    <th>Notes</th>
                                    <th>Degree</th>
                                    <th>Assignment File</th>
                                    <th>Your degree</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assignments.length > 0 ? (
                                    assignments.map((assignment, id) => (
                                        <tr key={id}>
                                            <td>{assignment.assignment_title}</td>
                                            <td className='assignments_description' title={assignment.assignment_description}>
                                                {assignment.assignment_description}
                                            </td>
                                            <td>{assignment.deadline}</td>
                                            <td>{assignment.notes}</td>
                                            <td>{assignment.degree}</td>
                                            <td>
                                                <a href={`http://127.0.0.1:8000/assignments/files/${assignment.assignment_file}`} target="_blank" rel="noreferrer" className='btn btn-primary' download>
                                                    Download File
                                                </a>
                                            </td>
                                            <td>{getGradeForAssignment(assignment.assignment_title)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className='text-primary'>No assignments available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Assignments;
