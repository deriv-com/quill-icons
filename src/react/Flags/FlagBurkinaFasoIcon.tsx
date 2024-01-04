import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBurkinaFasoIcon = (
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
    <path fill='#009F45' d='M0 8h24v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8Z' />
    <path fill='#F22722' d='M2 0h20a2 2 0 0 1 2 2v6H0V2a2 2 0 0 1 2-2Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
    <path
      fill='#FDD200'
      fillRule='evenodd'
      d='m12 10.084-2.057 1.082.393-2.29L8.67 7.25l2.3-.335L12 4.833l1.03 2.085 2.3.333-1.666 1.623.393 2.292'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBurkinaFasoIcon);
export default ForwardRef;
