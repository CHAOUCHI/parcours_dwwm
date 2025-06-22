import { Polling as XHR } from "engine.io/build/transports/polling";
import { WebSocket } from "engine.io/build/transports/websocket";
import { WebTransport } from "engine.io/build/transports/webtransport";
declare const _default: {
    polling: typeof polling;
    websocket: typeof WebSocket;
    webtransport: typeof WebTransport;
};
export default _default;
/**
 * Polling polymorphic constructor.
 *
 * @api private
 */
declare function polling(req: any): XHR;
declare namespace polling {
    var upgradesTo: string[];
}
