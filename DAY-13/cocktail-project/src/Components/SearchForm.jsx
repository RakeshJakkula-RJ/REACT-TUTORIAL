import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/SearchForm";
import { Form, useNavigation } from "react-router";

const SearchForm = ({ searchTerm }) => {

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

     const [ term, setTerm ] = useState('vodka');

      return (
         <Wrapper>
             <Form className="form"> 
                   <input type="text" name="search" 
                   className="form-input"   defaultValue={ searchTerm } />

                   <button type="submit" className="btn" disabled={ isSubmitting }>
                     { isSubmitting ? "submitting..." : "search" }
                   </button>
             </Form>
         </Wrapper>
      )

};


 export default SearchForm;
