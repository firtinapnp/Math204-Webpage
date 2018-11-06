import React, {Component} from "react";

class Announcements extends Component {
    render() {
        return (
            <div className="container">
		        <h3 className="center-align">Announcements</h3>
                <h4 class="blue-grey-text">Midterm Announcement & Places</h4>
         			<p>The midterm exam for Math 204 will start at 13 15 on Saturday (November 10)</p>
         			<p>The sections in the textbook covered in this exam are:</p>
                    <blockquote>
                        <ul>
                            <li>Chapter 2: 2.1, 2.2, 2.4, 2.6, 2.8</li>
                            <li>Chapter 3: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6</li>
                            <li>Chapter 4: 4.1, 4.2, 4.3, 4.4</li>
                        </ul>
                    </blockquote>
         			<p><strong>Remark:</strong> Everybody should take the exam at the following designated rooms. You may not be able to take the exam if you are not in the correct room. THE ROOMS ARE ASSIGNED ACCORDING ONLY TO <strong>STUDENT LAST NAME</strong> ALPHABETICALLY.</p>
         			<table className="highlight">
         				<thead>
         					<tr>
         						<th>Surname</th>
         						<th>Room</th>
         					</tr>
         				</thead>
         				<tbody>
                            <tr>
                                <td>Acar &#8211; Bilgi&#231;</td>
                                <td>SOS B07</td>
                            </tr>
                            <tr>
         						<td>Bing&#246;l &#8211; G&#246;ksel</td>
         						<td>SOS B08</td>
         					</tr>
                            <tr>
                                <td>G&#252;l &#8211; Massri</td>
                                <td>SOS B10</td>
                            </tr>
                            <tr>
         						<td>Melao&#287;lu &#8211; Tez</td>
         						<td>SOS B21</td>
         					</tr>
                            <tr>
                                <td>Tezcan &#8211; Zeybek</td>
                                <td>SCI Z24</td>
                            </tr>
         				</tbody>
         			</table>
        	</div>
        );
    }
}

export default Announcements;
