const R = React.createElement;

import FilterLink from '../containers/FilterLink.mjs';
import {VisibilityFilters} from '../actions/index.mjs';

const Footer = () => (
  R('div',
    null,
    R('span', null, 'Show: '),
    R(FilterLink, {filter: VisibilityFilters.SHOW_ALL}, 'All'),
    R(FilterLink, {filter: VisibilityFilters.SHOW_ACTIVE}, 'Active'),
    R(FilterLink, {filter: VisibilityFilters.SHOW_COMPLETED}, 'Completed'),
  )
);

export default Footer;
