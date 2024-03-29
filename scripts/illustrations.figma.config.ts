import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import outPutSvg from '@figma-export/output-components-as-svg';
import { ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import { SvgOutPutConfig } from './svg-configs';
import { IllustrationSvgReactOutPutConfig } from './svgr-configs/illustrations';

dotenv.config();

const fileId: string = '4N66of3WfbhmHWkBiGvlT9';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutSvgrComponent(IllustrationSvgReactOutPutConfig),
];

(module.exports as FigmaExportRC) = {
  commands: [
    [
      'components',
      {
        fileId,
        onlyFromPages: [],
        outputters,
      },
    ],
  ],
};
