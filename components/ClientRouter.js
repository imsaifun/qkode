import {withRouter} from 'next/router';
import {ClientRouter as AppBridgeClientRouter} from '@shopify/app-bridge-react'

function ClientRouter(props){
    const {router} = props
    console.log(router);
    return <AppBridgeClientRouter history={router}/>
}

export default withRouter(ClientRouter)