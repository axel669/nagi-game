import { writable } from "svelte/store"

const storageKey = "rtc-peer-id"
const url = new URL(location)
const host = url.searchParams.get("host") || null
const hostID = writable(host)
const savedPeerID = (host !== null)
    ? null
    : localStorage.getItem(storageKey)
const peerID = writable(null)
const peer = writable(null)
const push = writable(null)
const peerCount = writable(null)
const messages = writable(null)
const connected = writable(false)
const peerEvents = new EventTarget()

const isHost = host === null

const initHost = () => {
    const peerHost = new Peer(savedPeerID)

    peerHost.on(
        "open",
        () => {
            peerID.set(peerHost.id)
            if (savedPeerID !== null) {
                return
            }
            localStorage.setItem(storageKey, peerHost.id)
        }
    )

    const connections = new Set()
    peerHost.on(
        "connection",
        (connection) => {
            connections.add(connection)
            peerCount.set(connections.size)
            peerEvents.dispatchEvent(
                new CustomEvent(
                    "connection"
                )
            )
            connection.on(
                "close",
                () => {
                    connections.delete(connection)
                    peerCount.set(connections.size)
                }
            )
        }
    )
    const pushData = (data) => {
        for (const connection of connections) {
            connection.send(data)
        }
    }

    peer.set(peerHost)
    push.set(pushData)
    peerCount.set(0)
}

const initClient = () => {
    const peerClient = new Peer()
    const msgDispatch = new EventTarget()
    const messageBroker = {
        listen: (handler) => msgDispatch.addEventListener(
            "data",
            (evt) => handler(evt.data)
        )
    }
    peerClient.on(
        "open",
        () => {
            peerID.set(peerClient.id)

            const conn = peerClient.connect(host)
            conn.on(
                "open",
                () => connected.set(true)
            )
            conn.on(
                "data",
                (data) => {
                    const evt = new Event("data")
                    evt.data = data
                    msgDispatch.dispatchEvent(evt)
                }
            )
            conn.on(
                "close",
                () => connected.set(false)
            )
        }
    )

    peer.set(peerClient)
    connected.set(false)
    messages.set(messageBroker)
}

const init = isHost ? initHost : initClient
init()

export {
    connected,
    hostID,
    messages,
    peer,
    peerCount,
    peerID,
    push,
    peerEvents,

    isHost,
}
