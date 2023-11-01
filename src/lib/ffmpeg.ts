import { FFmpeg } from '@ffmpeg/ffmpeg';
import coreURL from '../ffmpeg/ffmpeg-core.js?url'; //ele n vai fazer a importação direta do arquivo quando o arquivo for carregado ele vai fazer a importação do arquivo via url
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url'; //ele n vai fazer a importação direta do arquivo quando o arquivo for carregado ele vai fazer a importação do arquivo via url
import workerURL from '../ffmpeg/ffmpeg-worker.js?url'; //ele n vai fazer a importação direta do arquivo quando o arquivo for carregado ele vai fazer a importação do arquivo via url

let ffmpeg: FFmpeg | null;

export async function loadFFmpeg() {
  if (ffmpeg) {
    return ffmpeg;
  }

  ffmpeg = new FFmpeg();

  if (!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL,
    });
  }
  return ffmpeg;
}
