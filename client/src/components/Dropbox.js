import React, { Component } from 'react';

class Dropbox extends Component {

  render() {
    return (
      <>
      <form>
        <label> {this.props.title}</label>
         <select value={this.props.value} onChange={event => this.props.setValue(event.target.value)} name = "dropdown_categories">
         <option key='0' value = ''>Make your selection</option>
         
         {this.props.categories?.sort().map ((category) => (
          <option key={category.category_id} value = {category.category_id}>{category.category}</option>
         )
         )}
         </select>
      </form> 
      </>
    )
  }
}

export default Dropbox;