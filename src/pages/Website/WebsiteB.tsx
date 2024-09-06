import { Fragment } from 'react'
import {Kop1, P} from '../../ui'

export const WebsiteBPage = () => {
    return (
        <Fragment>
            <Kop1>WebsiteB</Kop1>
            <P>Dit is een pagina op een Website: B</P>
            <P><a href="/website/a">Ga naar pagina A</a></P>
        </Fragment>
    )
}
