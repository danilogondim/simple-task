import React, { Component } from 'react';

class Dropbox extends Component {

  render() {

    return (
      <>

      <form>
        <label> Categories:</label>
         <select value={this.props.value} onChange={event => this.props.setValue(event.target.value)} name = "dropdown_categories">
            <option value = "1">Pets</option>
            <option value = "2">House</option>
            <option value = "3">Garden</option>
            <option value = "4">Food</option>
         </select>
      </form> 

      </>
    );

  }


}

export default Dropbox;