import { Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import QuotationForm from '../../components/QuotationForm/QuotationForm'

const QuotationPage = () => {
  return (
    <Fragment>
        <Navbar />
        <div className="pt-20"></div>
        <QuotationForm/>
    </Fragment>
  )
}

export default QuotationPage