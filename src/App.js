import React from "react";
import { Button, Table, Container } from "react-bootstrap";
import CSVReader from "react-csv-reader";
import "./App.css";
import ReactDOM from "react-dom";

function App() {
    const loadData = (data, fileInfo) => {
        //create a set to hold unique emails, gets rid of duplicates
        var unique_emails = new Set();
        for (var i = 0; i < data.length; i++) {
            unique_emails.add(data[i][0]);
        }
        //convert set to an array to map to rendered elements
        var emails = Array.from(unique_emails);
        console.log(emails);

        //value for the key attribute for each element
        var id = 0;
        //loop through the emails and create a <tr><td> element that will be rendered to the app
        var rendered_emails = emails.map((email) => {
            var result = (
                <tr>
                    <td key={id}>{email}</td>
                </tr>
            );
            id += 1;
            return result;
        });

        var domain_counts = {};

        //count the number of times each domain name appears. The email address string is split
        //on the '@' character.
        for (var j = 0; j < emails.length; j++) {
            var split_email = emails[j].split("@");
            var domain = split_email[1];
            if (domain_counts[domain]) {
                domain_counts[domain] += 1;
            } else {
                domain_counts[domain] = 1;
            }
        }

        // domain_counts.foreach((key, value, domain_counts) => {
        //     console.log("domain: " + key + " count: " + value);
        // });

        console.log(domain_counts);

        ReactDOM.render(
            <Container>
                <Table striped bordered hover>
                    <tbody>{rendered_emails}</tbody>
                </Table>
            </Container>,
            document.getElementById("table")
        );
    };

    return (
        <div className="App">
            <CSVReader onFileLoaded={loadData} />
            {/* <Button onClick={loadData}>Load Email Data</Button> */}
            <div id="table"></div>
        </div>
    );
}

export default App;
