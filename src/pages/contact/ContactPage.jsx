import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle'
import Contactpage from '../../components/Contact/Contact'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/Footer/Footer';
import "../../styles/pages/contactPage.scss"
import { Fragment } from 'react';

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar Logo={"https://png.pngtree.com/template/20190928/ourlarge/pngtree-line-furniture-lamp-chair-interior-logo-design-template-inspirat-image_312126.jpg"}/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

