import { Button } from './components/ui/button';
import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Label } from './components/ui/label';
import { Slider } from './components/ui/slider';
export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com 💜</span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="w-4 h4 mr-2" /> Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea className="resize-none p-5 leading-relaxed" placeholder="Inclua o prompt para a IA..." />
            <Textarea className="resize-none p-5 leading-relaxed" placeholder="Resultado gerado pela IA..." readOnly />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu
            prompt para adicionar o conteúdo da transcrição do video selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
              htmlFor="video"
            >
              <FileVideo className="w-8 h-8" />
              Carregar vídeo
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="trancription_prompt">Prompt de transcrição</Label>
              <Textarea
                id="trancription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (, )"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar vídeo
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <div className="space-y-2">
                <Label htmlFor="video_title">Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt..."></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="valueTitle">Título do youtube</SelectItem>
                    <SelectItem value="valueDecription">Descrição do youtube</SelectItem>
                  </SelectContent>
                </Select>
                <span className="block text-xs text-muted-foreground italic">
                  Você poderá customizar essa opção em breve
                </span>
              </div>
              <Label htmlFor="video_title">Model</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo, mas com possíveis erros.
              </span>
            </div>
            <Separator />

            <Button className="w-full" type="submit">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
