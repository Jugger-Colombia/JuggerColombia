import React from 'react';
import './PdfViwer.css'


const PdfViwer = (props) => {
    const { file } = props;
    return (
        <div>
            <object
                className="pdf-viewer"
                data={file}
                type="application/pdf"
                width='100%'
                height='842pt'
            >
            </object>
        </div>
    )
}

PdfViwer.defaultProps = {
    file: "https://storage.googleapis.com/juggercolombiabucket/Reglamento%20Jugger%20Colombia%202020%20%5Bversi%C3%B3n%20impresi%C3%B3n%5D.pdf"
    /* file: "https://www.facebook.com/JuggerColombia/photos/a.701961026581375/3230940520350067/" */
    /*  file: "http://mimosa.pntic.mec.es/jgomez53/docencia/abbott-planilandia.pdf" */
}

export default PdfViwer;