import { IFila } from "../shared/fila/IFila";
import { KafkaMQ } from "../shared/fila/kafka/kafka.infra";
import { RabbitMQ } from "../shared/fila/rabbit/rabbit.infra";

const fila: IFila = new RabbitMQ();

export { fila }