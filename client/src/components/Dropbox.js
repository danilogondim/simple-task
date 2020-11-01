import React, { Component } from 'react';

class Dropbox extends Component {

  render() {
    return (
      <>
      <form>
         <select value={this.props.value} onChange={event => this.props.setValue(event.target.value)} name = "dropdown_categories">
         <option key='0' value = ''>{this.props.title}</option>
         
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