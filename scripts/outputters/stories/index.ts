import fs from 'fs';
import path from 'path';
import * as FigmaExport from '@figma-export/types';
import { StorybookGenerateOptions } from '../../templates/story.type';

export interface OutPutStoriesOptions {
  getDirName: (options: FigmaExport.ComponentOutputterParamOption) => string;
  getComponentName: (options: FigmaExport.ComponentOutputterParamOption) => string;
  getCategoryName: (options: FigmaExport.ComponentOutputterParamOption) => string;
  getStorybookGenerator: (options: StorybookGenerateOptions) => string;
}

const outPutStories = ({
  getDirName,
  getComponentName,
  getCategoryName,
  getStorybookGenerator,
}: OutPutStoriesOptions): FigmaExport.ComponentOutputter => {
  return async (pages) => {
    const dir = './stories/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    pages.forEach(({ name: pageName, components }) => {
      components.forEach(({ name: componentName, figmaExport }) => {
        const options = {
          pageName,
          componentName,
          ...figmaExport,
        };
        // const category = isFlagsPage(options) ? 'Flags' : getFileDescriptor(options).category;
        const category = getCategoryName(options);
        const IconName = getComponentName(options);
        const dirName = getDirName(options);
        // const storybook = generateIconStorybook({
        //   IconName,
        //   dirName,
        //   category,
        // }); ---
        const storybook = getStorybookGenerator({
          IconName,
          dirName,
          category,
        });
        const storyBookPath = path.resolve(dir.toString(), `${IconName}.stories.tsx`);
        fs.writeFileSync(storyBookPath, storybook);
      });
    });
  };
};

export default outPutStories;
