const Pagination = ({ toPrevPage, toNextPage }) => {
  return (
    <div>
      {toPrevPage && <button onClick={toPrevPage}>Previous</button>}
      {toNextPage && <button onClick={toNextPage}>Next</button>}
    </div>
  )
}

export default Pagination
