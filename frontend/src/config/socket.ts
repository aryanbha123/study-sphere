import { io, Socket } from 'socket.io-client'
import { BASE_URL } from './config'

let socket: Socket | null = null
type socketOption = {
    token : string
}
type getSocketType = (options: socketOption) => Socket
// Lazy Singleton Pattern
export const getSocket: getSocketType = (options) => {
  if (!socket) {
    socket = io(BASE_URL, {
      autoConnect: false,
      transports: ['websocket'],
      auth: { token: options?.token }
    })
  }
  return socket;
}


export const resetSocker = () : void => {
    if(socket) {
        socket.disconnect();
        socket = null;
    }
}