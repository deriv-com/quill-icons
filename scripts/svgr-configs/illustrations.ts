import { ComponentOutputterParamOption } from '@figma-export/types';
import { Config } from '@svgr/core';
import { SVGR_COMPONENT_OUT_PUT_PATH } from '../utils/figma.constants';
import {
  getDirName,
  getExportTemplate,
  getFileDescriptor,
  getRandomHash,
  isMd,
  makeVariableName,
} from '../utils/figma.utils';
import * as FigmaExport from '@figma-export/types';
import { pascalCase } from '@figma-export/utils';
import { Config as OptimizeOptions } from 'svgo';

interface Options {
  output: string;
  getDirname?: (options: ComponentOutputterParamOption) => string;
  getComponentName?: (options: ComponentOutputterParamOption) => string;
  getComponentFilename?: (options: ComponentOutputterParamOption) => string;
  getFileExtension?: (options: ComponentOutputterParamOption) => string;
  getExportTemplate?: (options: ComponentOutputterParamOption) => string;
  /**
   * SVGR ships with a handful of customizable options, usable in both the CLI and API.
   * https://react-svgr.com/docs/options/
   */
  getSvgrConfig?: (options: ComponentOutputterParamOption) => Config;
}

function getVarNameByFileDC(fileDescriptor: ReturnType<typeof getFileDescriptor>) {
  const names: Array<string | undefined> = [];
  const fileDescriptorKeys = Object.keys(fileDescriptor) as Array<keyof typeof fileDescriptor>;
  fileDescriptorKeys.forEach((key) => {
    if (fileDescriptor[key] !== undefined && !isMd(fileDescriptor[key]) && key !== 'category') {
      names.push(fileDescriptor[key]);
    }
  });

  const joinedNames = names.join('_');
  const variableName = makeVariableName(joinedNames);
  return variableName;
}

export const getIllustrationComponentName = (
  options: FigmaExport.ComponentOutputterParamOption,
) => {
  const fileDescriptor = getFileDescriptor(options);
  const variableName = getVarNameByFileDC(fileDescriptor);
  return `${pascalCase(variableName)}Icon`;
};

export const IllustrationSvgReactOutPutConfig: Options = {
  output: SVGR_COMPONENT_OUT_PUT_PATH,
  getDirname: getDirName,
  getFileExtension: () => {
    return '.tsx';
  },
  getComponentName: getIllustrationComponentName,
  getComponentFilename: getIllustrationComponentName,
  getExportTemplate: (options) => {
    const reactComponentName = getIllustrationComponentName(options);
    const reactComponentFilename = getIllustrationComponentName(options);
    return getExportTemplate({ reactComponentFilename, reactComponentName });
  },
  getSvgrConfig: () => {
    const svgoConfig: OptimizeOptions = {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        {
          name: 'prefixIds',
          params: { prefix: getRandomHash() },
        },
        'removeComments',
        'removeUselessDefs',
        'removeUselessStrokeAndFill',
      ],
    };
    return {
      ref: true,
      svgProps: {
        role: 'img',
      },
      typescript: true,
      svgo: true,
      icon: true,
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      svgoConfig,
      dimensions: false,
    };
  },
};
