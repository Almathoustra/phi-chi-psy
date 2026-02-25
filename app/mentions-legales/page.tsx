import { Metadata } from "next";
import CitationLayout from "../components/citations/CitationLayout";
import styles from "./page.module.css";
import { Mailto } from "../components/mailto/Mailto";

export const metadata: Metadata = {
    title: "Mentions légales | φχψ"
};

export default function MentionsLegales(){
    return <CitationLayout>
        <main className="container">
            <h1 className="my-6 font-2xl font-bold">Mentions légales</h1>
            <h2 className="mb-3 mt-6 font-lg font-bold">Éditeur</h2>
            <p className="my-3">Ce site web, hébergé par <a href="https://www.ovhcloud.com" target="_blank">OVH</a>, est détenu et exploité par Philippe Anciaux.</p>
            <p className="my-3">Licencié en psychologie de l’Université Catholique de Louvain (promotion 2004).</p>
            <p className="my-3">Agréé par la <a href="https://www.compsy.be" target="blank">Commission des Psychologues</a> (numéro d&apos;inscription : 791206463).</p>
            <dl className={styles.Dl}>
                <div>
                    <dt>Numéro BCE:</dt>
                    <dd>BE 0844 162 690</dd>
                </div>
                <div>
                    <dt>Courrier électronique:</dt>
                    <dd><Mailto/></dd>
                </div>
                <div>
                    <dt>Téléphone:</dt>
                    <dd><a href="tel:+32 471 06 31 42">(+32) 0471 06 31 42</a></dd>
                </div>
                <div>
                    <dt>Adresse du cabinet:</dt>
                    <dd><address>7 Avenue de Champalle,<br/>5530 Yvoir</address></dd>
                </div>
            </dl>
            <h2 className="mb-3 mt-6 font-lg font-bold">Propriété intellectuelle</h2>
            <p className="my-3">L&apos;ensemble du contenu du site (textes, images, graphismes, logo, etc.) est la propriété exclusive de l&apos;éditeur sauf mention contraire. Toute reproduction, représentation, modification ou diffusion sans autorisation préalable est interdite.</p>
            <p>Ce site ne collecte aucune donnée personnelle et n&apos;utilise aucun cookie.</p>
        </main>
    </CitationLayout>
}