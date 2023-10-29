import { HttpTransportType, HubConnectionBuilder } from '@microsoft/signalr'
import hubConnectionRoute from '~/utils/ApiUrl'

export const connection = () => {
    var connect = new HubConnectionBuilder()
        .withUrl(hubConnectionRoute, {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets
        })
        .withAutomaticReconnect()
        .build()
    return connect
}