import * as APIUtil from '../util/tag_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const CLEAR_TAGS = 'CLEAR_TAGS';

export const fetchTags = fragment => dispatch => (
  APIUtil.fetchTags(fragment).then(
    tags => dispatch(receiveTags(tags))
  )
);

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const clearTags = () => ({
  type: CLEAR_TAGS
});