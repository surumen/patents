import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";

import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import { orderBy } from '@progress/kendo-data-query';

const API = 'http://localhost:5000/api/patents/';

const columns = [
 {
  name: "applicationNumber",
  label: "Application Number",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "applicationType",
  label: "Application Type",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "applicant",
  label: "Applicant",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "inventor",
  label: "Inventor",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "assignee",
  label: "Assignee",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "title",
  label: "Title",
  options: {
   filter: false,
   sort: true,
  }
 },
 {
  name: "year",
  label: "Year",
  options: {
   filter: true,
   sort: true,
  }
 },
];


class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patents: [],
      sort: [
            { field: 'applicationNumber', dir: 'asc' }
      ],
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
        <Column field="applicationNumber" title="Application Number"/>
        <Column field="title" title="Title" />
        <Column field="year" title="Year" />
    </Grid>
    );
  }
}

export default Display;