export default (data, pageNum, size) => {
  return data.slice(((pageNum - 1) * size), (pageNum * size))
}
