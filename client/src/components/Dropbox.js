import React, { Component } from 'react';

class Dropbox extends Component {

  render() {

    //console.log('this.props Dropxbox----------->', this.props.categories);

    return (
      <>
        
      <form>
        <label> {this.props.title}</label>
         <select value={this.props.value} onChange={event => this.props.setValue(event.target.value)} name = "dropdown_categories">

         {this.props.categories?.sort().map ((category) => (
          <option key={category.category_id} value = {category.category_id}>{category.category}</option>
         )
         )}


         </select>
      </form> 

      </>
    );

  }


}

export default Dropbox;