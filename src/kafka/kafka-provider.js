const { Kafka } = require('kafkajs')
class KafkaProvider {
    static create = (clientId) => {
        console.log(`ClientID: ${clientId}`)
        return  new Kafka({
            clientId: clientId,
            brokers: ["127.0.0.1:9092"],
        });
    };
    }

module.exports = KafkaProvider;
