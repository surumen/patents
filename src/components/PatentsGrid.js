import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Moment from 'moment';

import { orderBy } from '@progress/kendo-data-query';

import '../assets/style.css';

//const API = 'http://patentsapi-dev.us-east-2.elasticbeanstalk.com/api/patents';
const API = 'http://localhost:5000/api/patents';

//const PAGE = [1...500];

class PatentsGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patents: [],
      //patents.publicationDate = moment(patents.publicationDate).format('YYYY-MM-DD'),
      sort: [
            { field: 'applicationNumber', dir: 'asc' },
            { field: 'year', dir: 'asc' }
      ],
     filter: {
      logic: "and",
      filters: [
            { field: "applicationNumber", operator: "contains", value: "US14123354" }
      ],
      },
      skip: 0, 
      take: 10,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount(){
    return fetch(API)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          patents: responseJson._embedded.patents,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
  }

  render() {
    const { patents, isLoading, error } = this.state;
    const publicationDate = Moment(patents.publicationDate).format().toString();

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <Grid
        // style={{ height: '400px' }}
        data={orderBy(patents.slice(this.state.skip, 
          this.state.take + this.state.skip), 
          this.state.sort)}
        sortable
        resizable
        filterable
        filter={this.state.filter}
        onFilterChange={(e) => {
            this.setState({
                filter: e.filter
            });
        }}
        sort={this.state.sort}
        skip={this.state.skip}
        take={this.state.take}
        total={patents.length}
        pageable={true}
        onPageChange={this.pageChange}
        onSortChange={(e) => {
            this.setState({
                sort: e.sort
            });
        }}
    >
        <Column field="applicationNumber" title="Application Number" width="200px"/>
        <Column field="applicant" title="Applicant" width="180px"/>
        <Column field="title" title="Title" />
        <Column field="assignee" title="Assignee" width="180px"/>
        <Column field={Moment("publicationDate", 'YYYY-MM-DD').toString()} title="Publication Date" width="180px"/>
        <Column field="year" title="Year" width="100px"/>
    </Grid>
    );
  }
}

export default PatentsGrid;