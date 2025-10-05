import * as React from "react";
import {TYPEWRITER_URL} from "../../constants/URL";
import './TypeWriter.css';
import TypeWriterAnimation from "../../components/TypeWriterAnimation/TypeWriterAnimation";

function TypeWriter() {
    return(
        <section className="typewriter" id={TYPEWRITER_URL} role="Page intermédiaire">
        {/*    TODO: page typewriter*/}
            <TypeWriterAnimation speed={50}>Je suis une banane en chocolat</TypeWriterAnimation>
        </section>
    );
}

export default TypeWriter;
