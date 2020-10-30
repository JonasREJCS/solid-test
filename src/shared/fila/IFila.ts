export interface IFila {
    enviarParaFila() : Promise<void>
    adicionarListenerDaFila() : Promise<void>
}