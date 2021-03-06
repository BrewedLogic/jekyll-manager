import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import config from './config';
import dashboard from './dashboard';
import pages from './pages';
import collections from './collections';
import metadata from './metadata';
import drafts from './drafts';
import datafiles from './datafiles';
import staticfiles from './staticfiles';
import templates from './templates';
import theme from './theme';
import utils from './utils';
import notifications from './notifications';

export default combineReducers({
  routing: routerReducer,
  config,
  dashboard,
  pages,
  collections,
  metadata,
  drafts,
  datafiles,
  staticfiles,
  templates,
  theme,
  utils,
  notifications
});
