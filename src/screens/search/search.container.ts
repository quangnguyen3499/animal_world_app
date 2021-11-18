import {connect} from 'react-redux';
import SearchComponent from './search.view';

export const SearchContainer = connect(
  (state: any) => {
    return {
      shops: state.shops.shops,
    };
  },
  () => {
    return {};
  },
)(SearchComponent);
