import { Header } from "semantic-ui-react"


const BookNotFound = ({ errorCode, errorMessage }) => {
   return (
      <div className="not-found-container">
         <Header size='large'>{errorMessage}</Header>
      </div>
   )
}

export default BookNotFound
