import { HttpTransportType, HubConnectionBuilder } from '@microsoft/signalr'
import { hubConnectionUrl } from '~/utils/ApiUrl'

export const connection = () => {
    var connect = new HubConnectionBuilder()
        .withUrl(hubConnectionUrl, {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets
        })
        .withAutomaticReconnect()
        .build()
    return connect
}