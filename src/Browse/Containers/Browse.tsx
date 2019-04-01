import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import BrowseField, { BrowseFieldProps } from '../Components/BrowseField';
import { delayedSearch } from '../State/Actions';
import { BrowseStore } from '../State/StoreModel';

type StateProps = Pick<BrowseFieldProps, 'search'>;
type DispatchProps = Pick<BrowseFieldProps, 'handleSearch'>;

const mapStateToProps = ({ browseReducer }: { browseReducer: BrowseStore }): StateProps => {
  return {
    search: browseReducer.search
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  handleSearch: (search: string) => dispatch(delayedSearch(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseField);
