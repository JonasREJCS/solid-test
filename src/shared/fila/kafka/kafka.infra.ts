import { IFila } from "../IFila";

export class KafkaMQ implements IFila {
    enviarParaFila(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    adicionarListenerDaFila(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}