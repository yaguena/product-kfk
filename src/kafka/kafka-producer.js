const { Partitioners } = require("kafkajs")
const KafkaProvider = require("./kafka-provider")

class KafkaProducer {
    static create = async (topicId) => {
        const kafka = KafkaProvider.create("teste-1")
        const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })

        await producer.connect()
        await producer.send({
            topic: topicId,
            messages: [
                { value: 'Hello KafkaJS user!' },
            ],
        })
        await producer.disconnect()
    }
}

module.exports = KafkaProducer;
