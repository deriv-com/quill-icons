import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import outPutSvg from '@figma-export/output-components-as-svg';
import { ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import { LogosSvgReactOutPutConfig } from './svgr-configs/logos';
import { SvgOutPutConfig } from './svg-configs';

dotenv.config();

const fileId: string = 'ZGR1ou2d6WceOfunr2T97G';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutSvgrComponent(LogosSvgReactOutPutConfig),
];

(module.exports as FigmaExportRC) = {
  commands: [
    [
      'components',
      {
        fileId,
        onlyFromPages: [
          'Brands',
          'Sub-brands',
          'Deriv products',
          "Partner's products",
          'Payment methods',
        ],
        outputters,
      },
    ],
  ],
};
