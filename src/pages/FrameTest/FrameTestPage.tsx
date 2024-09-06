import { Fragment } from 'react'
import { Kop1, P } from '../../ui'
import { useNavigate } from 'react-router'

export const FrameTestPage = () => {
    const navigate = useNavigate()

    const urlChange = () => {
        const i = window.frames[0].location.href
        navigate('?url=' + decodeURI(i), { replace: true })
    }

    return (
        <Fragment>
            <Kop1>iFrame Test</Kop1>
            <P>Hieronder staat een Frame</P>
            <P>Als de url in het Frame veranderd, dan moet de url van de buitenste pagina ook veranderen</P>
            <iframe id="myiframe" src="http://localhost:5173/website/a" height="800" width="90%"
                    onLoad={urlChange}></iframe>
        </Fragment>
    )
}
