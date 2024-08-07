import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import outPutSvg from '@figma-export/output-components-as-svg';
import { ComponentFilter, ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import { IconSvgReactOutPutConfig } from './svgr-configs/icons';
import { SvgOutPutConfig } from './svg-configs';
import { ICON_PAGES } from './utils/figma.constants';

dotenv.config();

const fileId: string = 'c24yCkzAgS5Fv1x0QuEYxq';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutSvgrComponent(IconSvgReactOutPutConfig),
];

const filterComponent: ComponentFilter = (component) => {
  // pages without sm/md/lg/xl sizes we get all icons
  if (
    component.name.includes('flags /') ||
    component.name.includes('markets /') ||
    component.name.includes('currencies /') ||
    // This is a special case because of it's design so we should return every sizes!
    component.name.includes('label-paired /') ||
    // Temporarily adding this section here. Remember to remove it once the legacy category removed.
    component.name.includes('legacy')
  ) {
    return true;
  }

  // pages with sm/md/lg/xl sizes we get only md icons
  const splits = component.name.split('/');

  if (component.name.includes('accounts') && splits.length == 2) {
    return true;
  }
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
