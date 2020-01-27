import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { styles } from './PaginationStyles';
import { List, ListItem } from '@material-ui/core';

const Pagination = (props) => {
  const { runsPerPage, totalRuns, paginate, classes } = props;

  const pageNumbers = [];
  const lastPage = Math.ceil(totalRuns / runsPerPage);

  for(let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <List className={classes.pagination}>
        <ListItem className={classes.pagesLi}>pages: </ListItem>
        {pageNumbers.map(number => (
          <ListItem key={number} className={classNames(classes.pageLink, classes.underline)}>
            <a onClick={() => paginate(number)}>
              {number}
            </a>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(Pagination);