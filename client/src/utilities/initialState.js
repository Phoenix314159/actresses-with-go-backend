export default {
  main: {
    urls: ['/api/get_actresses_data', '/api/get_pictures']
  },
  paginate: {
    size: 10, //list of elements shown is 10 initially
    pageNum: 1
  },
  open: {
    show: false, //popup is initially hidden
    index: 0
  },
  hideButton: {
    hide: true, // change page size button is initially hidden
    value: '',
    inputArr: []
  }
}
