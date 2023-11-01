import React, { useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { api } from '@/lib/axios';

type PromptSelectProps = {
  id: string;
  title: string;
  prompt: string;
};

type Props = {
  onPromptSelected: (template: string) => void;
};

export const PromptSelect: React.FC<Props> = ({ onPromptSelected }) => {
  const [prompts, setPrompts] = React.useState<PromptSelectProps[] | null>([]);
  useEffect(() => {
    api.get('/prompts').then(response => {
      setPrompts(response.data);
    });
  }, []);

  const handlePromptSelected = (promptId: string) => {
    const prompt = prompts?.find(prompt => prompt.id === promptId);

    if (!prompt) return;
    onPromptSelected(prompt.prompt);
  };

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..."></SelectValue>
      </SelectTrigger>
      <SelectContent>
        {prompts?.map(prompt => {
          return (
            <SelectItem key={prompt.id} value={prompt.id}>
              {prompt.title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
