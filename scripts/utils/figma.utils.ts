import { pascalCase } from '@figma-export/utils';
import * as FigmaExport from '@figma-export/types';
import { ICON_PAGES } from './figma.constants';
import crypto from 'crypto';

export const getRandomHash = () => crypto.randomBytes(16).toString('hex');

export const getFileDescriptor = (options: FigmaExport.ComponentOutputterParamOption) => {
  const { componentName } = options;
  const separator = '/';
  const splits = componentName.split(separator);

  let category = splits[0].trim().replace(/-md/g, '');

  let subCategory = splits[1].trim().replace(/-md/g, '');

  let variant = splits[2] ? splits[2].trim().replace(/-md/g, '') : undefined;

  let style = splits[3] ? splits[3].trim().replace(/-md/g, '') : undefined;

  let type = splits[4] ? splits[4].trim().replace(/-md/g, '') : undefined;

  if (componentName.includes('label-paired')) {
    category = splits[0].trim();

    subCategory = splits[1].trim();

    variant = splits[2] ? splits[2].trim() : undefined;

    style = splits[3] ? splits[3].trim() : undefined;

    type = splits[4] ? splits[4].trim() : undefined;
  }

  return {
    category,
    subCategory,
    variant,
    style,
    type,
  };
};

export const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const lowerFirst = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

export const isMd = (value?: string) => {
  return value?.toLowerCase() === 'md';
};
export const getVarNameByFileDC = (fileDescriptor: ReturnType<typeof getFileDescriptor>) => {
  const names: Array<string | undefined> = [];
  const fileDescriptorKeys = Object.keys(fileDescriptor) as Array<keyof typeof fileDescriptor>;
  fileDescriptorKeys.forEach((key) => {
    if (key !== 'category' && fileDescriptor[key] !== undefined && !isMd(fileDescriptor[key])) {
      names.push(fileDescriptor[key]);
    }
  });

  const joinedNames = names.join('_');
  const variableName = makeVariableName(joinedNames);
  return variableName;
};

export const getNameGeneratorByPage = (pageName: (typeof ICON_PAGES)[number]) => {
  switch (pageName) {
    case 'Markets':
    case 'Currencies':
    case 'Flags':
      return (fileDescriptor: ReturnType<typeof getFileDescriptor>) => {
        const { subCategory } = fileDescriptor;
        return `${subCategory}`;
      };
    case 'System':
      return (fileDescriptor: ReturnType<typeof getFileDescriptor>) => {
        const names: Array<string | undefined> = [];
        const { category, variant, style } = fileDescriptor;

        if (category.includes('label-paired')) {
          const names = `${category}_${variant ?? ''}_${style ?? ''}`;
          const variableName = makeVariableName(names);
          return variableName;
        }

        const fileDescriptorKeys = Object.keys(fileDescriptor) as Array<
          keyof typeof fileDescriptor
        >;
        fileDescriptorKeys.forEach((key) => {
          if (fileDescriptor[key] !== undefined && !isMd(fileDescriptor[key])) {
            names.push(fileDescriptor[key]);
          }
        });

        const joinedNames = names.join('_');
        const variableName = makeVariableName(joinedNames);
        return variableName;
      };
    default:
      return (fileDescriptor: ReturnType<typeof getFileDescriptor>) => {
        const names: Array<string | undefined> = [];
        const fileDescriptorKeys = Object.keys(fileDescriptor) as Array<
          keyof typeof fileDescriptor
        >;
        fileDescriptorKeys.forEach((key) => {
          if (fileDescriptor[key] !== undefined && !isMd(fileDescriptor[key])) {
            names.push(fileDescriptor[key]);
          }
        });

        const joinedNames = names.join('_');
        const variableName = makeVariableName(joinedNames);
        return variableName;
      };
  }
};

export const getSvgBaseName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const fileDescriptor = getFileDescriptor(options);
  const nameGenerator = getNameGeneratorByPage(options.pageName as (typeof ICON_PAGES)[number]);
  const variableName = nameGenerator(fileDescriptor);
  return `${pascalCase(variableName)}.svg`;
};

export const getEs6VariableName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const fileDescriptor = getFileDescriptor(options);
  const variableName = getVarNameByFileDC(fileDescriptor);
  return `Svg${pascalCase(variableName)}`;
};
export const getDirName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const { category } = getFileDescriptor(options);
  return `${pascalCase(category)}`;
};

export const getComponentName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const fileDescriptor = getFileDescriptor(options);
  const variableName = getVarNameByFileDC(fileDescriptor);
  return `${pascalCase(variableName)}Icon`;
};

export const getExportTemplate = ({
  reactComponentName,
  reactComponentFilename,
}: {
  reactComponentName: string;
  reactComponentFilename: string;
}) => {
  return `export { default as ${reactComponentName} } from './${reactComponentFilename}';`;
};

export const getSvgStoreOriginalPath = (pageName: string) => {
  return `${pageName}.svg`;
};

export const getSvgStoreFinalPath = (pageName: string) => {
  return 'icons.svg';
};

export const isFlagsPage = (options: FigmaExport.ComponentOutputterParamOption) => {
  if (options.pageName.toLowerCase().includes('flag')) {
    return true;
  }
  return false;
};

export const makeVariableName = (name: string) => {
  if (/^\d/.test(name)) {
    return name.slice(1);
  }
  return name;
};
