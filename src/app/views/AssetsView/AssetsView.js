import React from 'react';
import 'normalize.css';
import SiteHeader from '../../components/SiteHeader';
import styles from './style.css';
import Asset from "../../components/asset";


const AssetsView = (props) => (
    <Asset {...props} />
);

export default AssetsView;
