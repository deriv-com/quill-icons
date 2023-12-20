import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagCzechRepublicIcon = (
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
    <g clipPath='url(#a)'>
      <path fill='#E8252A' d='M.682 15.504c.352.309.813.496 1.318.496h20a2 2 0 0 0 2-2V8H11z' />
      <path fill='#fff' d='M22 0H2C1.495 0 1.034.187.682.496L11 8h13V2a2 2 0 0 0-2-2' />
      <path
        fill='#17579E'
        d='M.682 15.504 11 8 .682.496A1.995 1.995 0 0 0 0 2v12c0 .6.264 1.138.682 1.504'
      />
      <path
        fill='#000'
        fillOpacity={0.08}
        fillRule='evenodd'
        d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <rect width={24} height={16} fill='#fff' rx={2} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(FlagCzechRepublicIcon);
export default ForwardRef;
