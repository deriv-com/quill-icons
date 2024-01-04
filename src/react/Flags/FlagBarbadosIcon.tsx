import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBarbadosIcon = (
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
    <path fill='#002281' d='M16 0h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6V0Z' />
    <path fill='#FFC800' d='M16 0H8v16h8V0Z' />
    <path
      fill='#7F6300'
      fillRule='evenodd'
      d='M11.5 10.5h1v1h-1v-1Zm2-2h1v1h-1v-1Zm-4 0h1v1h-1v-1Z'
      clipRule='evenodd'
    />
    <path
      fill='#333'
      fillRule='evenodd'
      d='M12.5 8.5v-4h-1v4h-1v1h1v1h1v-1h1v-1h-1Zm1-3h1v3h-1v-3Zm-4 0h1v3h-1v-3Z'
      clipRule='evenodd'
    />
    <path fill='#002281' d='M2 0h6v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBarbadosIcon);
export default ForwardRef;
