import React, { useState,useEffect} from 'react';
import Axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


export const Books=({searched})=>{
    const [books,setBooks]=useState([])
   console.log('Books:',searched)
    
    useEffect(() => {
        Axios.get('http://localhost:8080/add').then(res => setBooks(res.data))
      }, [])
      const headerSortingStyle = { backgroundColor: '#c8e6c9' };

//console.log(books)
    const columns = [
        {dataField: 'id',
         text: 'ID',
         sort: true,
        headerSortingStyle},
        {dataField: 'author',
         text:'Author',
         sort:true,
        headerSortingStyle},      
        {dataField: 'title',
         text: 'Title',
         sort:true,
        headerSortingStyle},
        {dataField: 'year',
         text: 'Year',
         sort:true,
        headerSortingStyle},
        {dataField: 'category',
         text: 'Category',
         sort:true,
        headerSortingStyle},

    ];
    const defaultSorted = [{
        dataField: 'title',
        order: 'asc'
      }];
    
    return(
        <div className='mt-5 pt-2'>         
            <BootstrapTable bootstrap4 keyField='id' 
                data={searched ? books.filter(book=>
                    (book.title.toLocaleLowerCase().includes(searched.toLocaleLowerCase()) || 
                     book.category.toLocaleLowerCase().includes(searched.toLocaleLowerCase()) ||
                     book.author.toLocaleLowerCase().includes(searched.toLocaleLowerCase()) ) )
                     : books } 
                columns={ columns } pagination={ paginationFactory() }  defaultSorted={ defaultSorted }  
            />
        </div>
    )
}