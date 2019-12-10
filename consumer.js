var kafka = require("kafka-node"),
  Consumer = kafka.Consumer,
  client = new kafka.KafkaClient(),
  consumer = new Consumer(
    client,
    [{ topic: "test", offset: 80, partition: 0 }],
    {
      autoCommit: false,
      fromOffset: true
    }
  );

consumer.on("message", function(message) {
  console.log(message.value);
});
