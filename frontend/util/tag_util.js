export const fetchTags = fragment => (
  $.ajax({
    method: 'GET',
    url: 'api/tags',
    data: {fragment}
  })
);