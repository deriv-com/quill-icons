import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagAntiguaAndBarbudaIcon = (
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
    <path fill='#fff' d='M15.692 9H8.308L12 13z' />
    <path
      fill='#D0091E'
      d='M.563.61C.214.97 0 1.46 0 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2c0-.54-.214-1.03-.562-1.39L12 13z'
    />
    <path fill='#0070C9' d='M19.385 5H4.615l3.693 4h7.384z' />
    <path
      fill='#333'
      d='M23.438.61A1.994 1.994 0 0 0 22 0H2C1.436 0 .926.234.563.61L4.615 5h14.77z'
    />
    <path fill='#FDD200' d='M8.535 5h6.93a3.5 3.5 0 1 0-6.93 0' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagAntiguaAndBarbudaIcon);
export default ForwardRef;
