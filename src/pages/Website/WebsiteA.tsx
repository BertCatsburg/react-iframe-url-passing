import { Fragment } from 'react'
import {Kop1, P} from '../../ui'

export const WebsiteAPage = () => {
    return (
        <Fragment>
            <Kop1>WebsiteA</Kop1>
            <P>Dit is een pagina op een Website: A</P>
            <P><a href="/website/b">Ga naar pagina B</a></P>
        </Fragment>
    )
}
