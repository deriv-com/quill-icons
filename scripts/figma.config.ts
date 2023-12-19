import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import outPutSvg from '@figma-export/output-components-as-svg';
import { ComponentFilter, ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import outPutStories from './outputters/stories';
import { IconSvgReactOutPutConfig } from './svgr-configs/icons';
import { IconStoriesOptions } from './stories-configs/icons';
import { SvgOutPutConfig } from './svg-configs';
import { ICON_PAGES } from './utils/figma.constants';

dotenv.config();

const fileId: string = 'c24yCkzAgS5Fv1x0QuEYxq';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutSvgrComponent(IconSvgReactOutPutConfig),
  outPutStories(IconStoriesOptions),
];

const filterComponent: ComponentFilter = (component) => {
  // pages without sm/md/lg/xl sizes we get all icons
  if (
    component.name.includes('flags /') ||
    component.name.includes('markets /') ||
    component.name.includes('currencies /') ||
    // This is a special case because of it's design so we should return every sizes!
    component.name.includes('label-paired /')
  ) {
    return true;
  }

  // pages with sm/md/lg/xl sizes we get only md icons
  const splits = component.name.split('/');
  if (!splits[1].includes('md')) {
    return false;
  }
  return true;
};

(module.exports as FigmaExportRC) = {
  commands: [
    [
      'components',
      {
        fileId,
        filterComponent,
        onlyFromPages: [...ICON_PAGES],
        outputters,
      },
    ],
  ],
};
