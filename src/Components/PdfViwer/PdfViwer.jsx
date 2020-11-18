import React from 'react';

const PdfViwer = (props) => {
    const { file } = props;
    return (
        <object
            data={file}
            type="application/pdf"
            width='100%'
            height='842pt'
        >
        </object>
    )
}

PdfViwer.defaultProps = {
    /* file: "https://www.facebook.com/JuggerColombia/photos/a.701961026581375/3230940520350067/" */
    file: "http://mimosa.pntic.mec.es/jgomez53/docencia/abbott-planilandia.pdf"
}

export default PdfViwer;