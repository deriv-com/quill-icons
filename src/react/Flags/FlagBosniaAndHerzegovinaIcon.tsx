import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBosniaAndHerzegovinaIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#001C98'
      d='M22 16H2a2 2 0 0 1-2-2V2C0 1.388.275.84.709.473L23.29 15.527A1.992 1.992 0 0 1 22 16Z'
    />
    <path
      fill='#FC0'
      d='M2 0h20a2 2 0 0 1 2 2v12c0 .612-.275 1.16-.709 1.527L.71.473A1.992 1.992 0 0 1 2 0Z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M2 3h1v1H2V3Zm3 2h1v1H5V5Zm3 2h1v1H8V7Zm3 2h1v1h-1V9Zm3 2h1v1h-1v-1Zm3 2h1v1h-1v-1Z'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBosniaAndHerzegovinaIcon);
export default ForwardRef;
