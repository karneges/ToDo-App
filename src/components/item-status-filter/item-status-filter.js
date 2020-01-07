import React from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends React.Component {
  constructor () {
    super();
    this.state = {
      btns: [
        { label: 'All', activ: true, id: '1' },
        { label: 'Active', activ: false, id: '2' },
        { label: 'Done', activ: false, id: '3' }
      ]
    };
    this.onChangeFilter = (id) => {
      this.setState(({ btns }) => {
        const newArray = btns.map((item) => {
          if (item.id === id) {
            // item.activ = true;
            const newItem = { ...item, activ: true };
            return newItem;
          } else {
            // item.activ = false;
            const newItem = { ...item, activ: false };
            return newItem;
          }
        });
        return {
          btns: newArray
        };
      });
      this.setState((state) => {
        console.log(state.btns);
        this.props.onSearch(null, state.btns);
      });

      // console.log(this.state.btns
      //   .filter((item) => item.activ));
    };
    this.isActive = (status) => {
      if (status) {
        return 'btn btn-info';
      } else {
        return 'btn btn-outline-secondary';
      }
    };
  }

  render () {
    const btns = this.state.btns
      .map((item) => {
        return (
          <button key={item.id} type="button"
            className={this.isActive(item.activ)}
            onClick={() => this.onChangeFilter(item.id)}
          >{item.label}
          </button>
        );
      }
      );
    return (
      <div className="btn-group">
        {btns}
      </div>
    );
  }
}

// function BtnSerch (props) {
//   return (
//     <button key={props.id} type="button"
//       className={props.className}>{props.label}</button>
//   );
// }

export default ItemStatusFilter;
