import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ShopContainer } from './shop.styles';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
    state = { loading: true };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        // very deeply nested feedback using fetch.
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-80888/databases/(default)/documents/collections')
        //     .then(response => response.json())
        //     .then(collections => console.log(collections));

        collectionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                updateCollections(collectionsMap);
                this.setState({ loading: false });
            });
    }


    // componentDidMount() {
    //     const { updateCollections } = this.props;
    //     const collectionRef = firestore.collection('collections');

    //     collectionRef.onSnapshot(async snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         updateCollections(collectionsMap);
    //         this.setState({ loading: false });
    //     });
    // }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <ShopContainer>
                <Route exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </ShopContainer>)
    };
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
