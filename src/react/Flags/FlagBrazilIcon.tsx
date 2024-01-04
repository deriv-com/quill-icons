import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBrazilIcon = (
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
      fill='#009C34'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z'
    />
    <path fill='#F8E23D' fillRule='evenodd' d='M12 2.5 19.5 8 12 13.5 4.5 8' clipRule='evenodd' />
    <path
      fill='#D9D9D9'
      d='M15.435 8.677a3.485 3.485 0 0 1-.653 1.447c-1.731-1.72-3.849-2.464-6.263-2.494.057-.54.237-1.045.512-1.484 2.378.12 4.562.883 6.404 2.531Z'
    />
    <path fill='#002478' d='M9.03 6.146c2.38.12 4.563.883 6.405 2.531a3.5 3.5 0 0 0-6.404-2.53Z' />
    <path
      fill='#002478'
      fillRule='evenodd'
      d='M12 11.5c1.134 0 2.143-.54 2.782-1.376-1.731-1.72-3.849-2.464-6.263-2.494A3.5 3.5 0 0 0 12 11.5Zm-2.5-3h1v1h-1v-1Zm1 1h1v1h-1v-1Zm3 0h-1v1h1v-1Z'
      clipRule='evenodd'
    />
    <path fill='#D9D9D9' d='M9.5 8.5h1v1h-1v-1ZM10.5 9.5h1v1h-1v-1ZM12.5 9.5h1v1h-1v-1Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBrazilIcon);
export default ForwardRef;
