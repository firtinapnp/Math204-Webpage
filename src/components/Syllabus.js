import React, {Component} from "react";
import book from "../images/book.jpg";

class Syllabus extends Component {
    render() {
        return (
            <div className="container">
                <div id="syllabus">
                    <h3 className="center-align">Syllabus for Math 204</h3>
                    <h4 className="center-align">Fall 2018</h4>
                    <div id="page_1">
                        <h5>Title of the Course: Differential Equations</h5>
                        <p>Click <a href={`${process.env.PUBLIC_URL}/pdf/syllabus.pdf`}>here</a> to view the syllabus as pdf</p>
                        <h5>Instructors</h5>
                        <blockquote>
                            <ul>
                                <li>Tolga Etg&#252;, SCI 267, Office Hours: MoWe 13:30-14:30<a href="mailto:tetgu@ku.edu.tr">(tetgu@ku.edu.tr)</a></li>
                            </ul>
                        </blockquote>
                        <h5>Teaching Assistants (TAs)</h5>
                        <blockquote>
                            <ul>
                                <li>O&#287;uz Do&#287;an, SCI 156, Office Hours: Th 10:00 - 11:00 <a href="mailto:odogan13@ku.edu.tr">(odogan13@ku.edu.tr)</a></li>
                                <li>F&#305;rt&#305;na K&#252;&#231;&#252;k, SCI 156, Office Hours: We 13:00 - 14:15 <a href="mailto:fkucuk@ku.edu.tr">(fkucuk@ku.edu.tr)</a></li>
                                <li>G&#246;ksu Karada&#287;, ENG 143, Office Hours: We 14:30 - 15:30 <a href="mailto:gkaradag16@ku.edu.tr">(gkaradag16@ku.edu.tr)</a></li>
                                <li>Asl&#305;han &#199;eliker, SCI 130, Office Hours: TBA <a href="mailto:aceliker@ku.edu.tr">(aceliker@ku.edu.tr)</a></li>
                            </ul>
                        </blockquote>
                        <h5>Web Address</h5>
                        <p><a href="http://home.ku.edu.tr/~math204">http://home.ku.edu.tr/~math204</a></p>
                        <h5>Textbook</h5>
                        <img className="left-align" src={book} alt="Textbook"/>
                        <p> W. E. Boyce, R. C. DiPrima, D.B. Meade, Elementary Differential Equations and
                            Boundary Value Problems, Global/11th Edition (John Wiley &amp; Sons, New York, 2017).
                        </p>
                        <h5>Topics to be covered</h5>
                        <p>Introduction to differential equations (Chapter 1); First order ODEs (ordinary differential equations) (Chapter 2); Second and higher order ODEs (Chapters 3 and 4); Power series solution of ODEs (Chapter 5); The Laplace transform (Chapter 6);
                            Systems of linear ODEs (Chapter 7); Partial differential equations (Chapter 10, if time permits)
                        </p>
                        <h5>Evaluation method</h5>
                        <p>Students&lsquo; progress will be evaluated according to their performance in a midterm and a final exam. The letter grades will be assigned according to Ko&#231; University.</p>
                        <p>The contribution of the exams are as follows:</p>
                        <blockquote>Midterm exam 40%, final exam 60%.</blockquote>
                        <p>Suggested Grading Scale:</p>
                        <table className="highlight responsive-table">
                            <thead>
                                <tr>
                                    <th>Grade Range</th>
                                    <th>Suggested Letter Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>90 &#8211; 100</td>
                                    <td>A+, A</td>
                                </tr>
                                <tr>
                                    <td>87 &#8211; 89</td>
                                    <td>A-</td>
                                </tr>
                                <tr>
                                    <td>83 &#8211; 86</td>
                                    <td>B+</td>
                                </tr>
                                <tr>
                                    <td>80 &#8211; 82</td>
                                    <td>B</td>
                                </tr>
                                <tr>
                                    <td>77 &#8211; 79</td>
                                    <td>B-</td>
                                </tr>
                                <tr>
                                    <td>73 &#8211; 76</td>
                                    <td>C+</td>
                                </tr>
                                <tr>
                                    <td>70 &#8211; 72</td>
                                    <td>C</td>
                                </tr>
                                <tr>
                                    <td>67 &#8211; 69</td>
                                    <td>C-</td>
                                </tr>
                                <tr>
                                    <td>64 &#8211; 66</td>
                                    <td>D+</td>
                                </tr>
                                <tr>
                                    <td>60 &#8211; 63</td>
                                    <td>D</td>
                                </tr>
                                <tr>
                                    <td>0 &#8211; 59</td>
                                    <td>F</td>
                                </tr>
                            </tbody>

                        </table>

                        <h5>Problem Sessions</h5>
                        <p>Attendance to the weekly problem sessions is strongly recommended.</p>
                        <h5>The Make-Up Policy</h5>
                        <p>If a student misses the midterm exam, their final exam score will be entered as their midterm exam score as well. If a student misses the final exam and has a <strong>documented valid excuse accepted by the Dean&#8217;s office</strong>, a make-up exam will be given after the final during the dates indicated in the KU Academic Calendar.</p>
                        <h5>Classroom Code of Conduct</h5>
                        <p>Students at Ko&#231; University are required to adhere to classroom code of conduct and to refrain from all forms of unacceptable behavior during lectures. The activities which are prohibited in class include and are not limited to:</p>
                        <blockquote>
                            <ul>
                                <li>Arriving late or leaving early without the prior permission of the professor</li>
                                <li>Engaging in side conversations</li>
                                <li>Using cell phones and other electronic devices. All cell phones should be switched
                                    off before entering the lecture room. If you expect a very important call, please switch your phone to silent mode and let your professor know in advance that you may receive a call.
                                </li>
                            </ul>
                        </blockquote>
                        <p>Please read the KU Student Code of Conduct from <a href="https://vpaa.ku.edu.tr/academic/student-code-of-conduct">here</a></p>
                        <div style={{padding: "50px 0px 15px 20px", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "8px", color:"#c8c8c8"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Syllabus;
