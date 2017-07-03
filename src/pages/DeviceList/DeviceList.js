import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeviceListItem from '../../components/DeviceListItem/DeviceListItem';
import FilterSelect from '../../components/FilterSelect/FilterSelect';
import Search from '../../components/Search/Search';
import { options } from '../../data/constants';
import { searchItem, filterItems } from '../../utils/utils';
require('./DeviceList.scss');

class DeviceList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filterOption: 'all',
      searchValue: ''
    };
    this.handleFilterSelect = (filterOption) => {
      this.setState({ filterOption });
    };
    this.handleSearchResult = (searchValue) => {
      this.setState({ searchValue });
    };
  }

  render () {
    const searchValue = this.state.searchValue;
    const filterOption = this.state.filterOption;
    const match = this.props.match;

    if (this.props.items.length === 0) {
      return (
        <main>
          <h1>Oops... there's nothing here.
            It looks like you need to add a device first.</h1>
          <div>Add Device</div>
        </main>
      );
    }

    return (
      <main>
        <h1>Yours devices</h1>
        <FilterSelect
          handleSelect={this.handleFilterSelect}
          options={options}
        />
        <Search
          handleSearch={this.handleSearchResult}
        />
        <Link to={'#'} className="add-item-button">+</Link>
        <section>
          {this.props.items.filter(item => filterItems(item, filterOption)
          ).filter(item => searchItem(item, searchValue)
          ).map((item, i) => {
            return (
              <DeviceListItem data={item} key={i} match={match}/>
            );
          })
          }
        </section>
      </main>
    );
  }
}

const mapStateToProps = state =>({
  items: state
});
export default connect(mapStateToProps)(DeviceList);
