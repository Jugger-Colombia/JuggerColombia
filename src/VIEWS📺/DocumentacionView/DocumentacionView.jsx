import React from 'react';

import NavBar from '../../Components/NavBar/navBar';
import PdfViwer from '../../Components/PdfViwer/PdfViwer';
import DocsMenu from '../../Components/DocsMenu/DocsMenu'
import Footer from '../../Components/Footer/footer';
import { BlueBanner } from '../../Components/Banner/banner';
import './DocumentacionView.css'

const DocumentationView = (props) => {

    return (
        <div className="documentos-view">
            <NavBar />
            <BlueBanner />

            <DocsMenu />


            {/*  <PdfViwer /> */}

            <Footer />
        </div>
    )
}

export default DocumentationView;