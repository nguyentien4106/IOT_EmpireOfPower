import mqtt from "mqtt";

const clientId = "emqx_react_" + Math.random().toString(16).substring(2, 8);
const username = "admin";
const password = "admin";

const options = {
    clientId,
    username,
    password,
    clean: true, // retain session
    connectTimeout: 4000, // Timeout period
    
    // ...other options
}

const url = 'wss://n80e5132.ala.asia-southeast1.emqxsl.com:8084/mqtt'

const connect = () => mqtt.connect(url, options)

const connectAsync = async (opts = {}) => {
    return await mqtt.connectAsync(url, { ...options, ...opts })
}

const subscribe = (client, subscription) => {
    const { topic, qos } = subscription
    client.subscribe(topic, { qos }, (error) => {
      console.log(`Subscribe to ${topic}: ${error ? "error" : "successfully"}`)
    })
}

const publish = (client, context) => {
    const { topic, qos, payload } = context;
    client.publish(topic, payload, { qos }, (error) => {
      if (error) {
        console.log("Publish error: ", error);
      }
    });
}

const receive = (client, topic, callback) => {
    client.on("message", (tp, message) => {
        if(topic === tp){
            callback(message)
        }
    })
}

let client;
const delay = ms => new Promise(res => setTimeout(res, ms));

export class MQTT{
    constructor(){
        this.client = null;
    }

    static connect(){
        this.client = connect()
    }

    static async connectAsync(opts){
        this.client = await connectAsync(opts);
        return this.client
    }

    static async reload(){
        await delay(2000)
    }

    static async login(username, password){
        this.client = await connectAsync({username: username, password: password})

        return this.client.connected
    }

    static async subscribe(){

    }

    static async publish(context){
        publish(this.client, context)
    }
}

// export const MQTT = {
//     connect,
//     subscribe,
//     publish,
//     receive
// }