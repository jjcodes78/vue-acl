/**
 * Created by squad on 19/07/16.
 */

let _pagination = {
    total: 0,
    per_page: 15,
    from: 1,
    to: 0,
    current_page: 1
}

const setPagination = function (paginationData) {
  _pagination.total = paginationData.total
  _pagination.per_page = paginationData.per_page
  _pagination.current_page = (paginationData.current_page > paginationData.last_page) ? 1 : paginationData.current_page
  _pagination.from = paginationData.from
  _pagination.to = paginationData.to
}

const getPagination = function () {
  return _pagination
}

const getPaginationQuery = function (context) {
  let query = {}

  if (context.pagination.current_page > 1 ) {
    query['page'] = context.pagination.current_page
  }

  if (context.pagination.per_page != 15) {
    query['per_page'] = context.pagination.per_page
  }

  if (context.searchTerm && context.searchTerm != '') {
    query['search'] = context.searchTerm
  }

  if (context.orderBy && context.orderBy != '') {
    query['orderBy'] = context.orderBy
  }

  if (context.sortedBy && context.sortedBy != 'asc') {
    query['sortedBy'] = context.sortedBy
  }

  return query
}

const getRouteQuery = function (context) {

  if(context.$route.query.canceled) {
    context.$set('query.canceled', context.$route.query.canceled)
  }

  if (context.$route.query.search) {
    context.searchTerm = context.$route.query.search
  }

  if (context.$route.query.page) {
    context.pagination.current_page = context.$route.query.page
  } else {
    context.pagination.current_page = 1
  }

  if (context.$route.query.per_page) {
    context.pagination.per_page = context.$route.query.per_page
  }

  if (context.$route.query.orderBy) {
    context.orderBy = context.$route.query.orderBy
  }

  if (context.$route.query.sortedBy) {
    context.sortedBy = context.$route.query.sortedBy
  }

  //TODO: other queries terms, sort, order and etc..

}

export default {
  getPaginationQuery,
  getRouteQuery,
  setPagination,
  getPagination
}