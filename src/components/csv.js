import React from 'react';
import { CSVLink, CSVDownload } from "react-csv";

class CsvExport extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        window.close();
    }

    render() {
        let headers = [
            { label: 'Subgoal name', key: 'subgoalName' },
            { label: 'yesno', key: 'yesno' },
            { label: 'Action name', key: 'actionName'}
          ];
        return(
            <div>
                <p>Here you can download all your data in a csv file!</p>
                <CSVLink
                    data={this.props.array}
                    headers = {headers}
                    filename={"my-file.csv"}
                    target="_blank"
                    >
                    Download CSV
                </CSVLink>
                <br/>
                <button name='exit' onClick={this.handleSubmit}>Just Exit</button>
            </div>
        )
    }
}
export default CsvExport;
