import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyTraderSHubIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#333' clipPath='url(#3b6f628a4933f3369ca447a04525f686__a)'>
      <path d='M0 2a2 2 0 0 1 2-2h7.077a2 2 0 0 1 2 2v7.077a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
      <path
        fillRule='evenodd'
        d='M22 1h-7.077a1 1 0 0 0-1 1v7.077a1 1 0 0 0 1 1H22a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1m-7.077-1a2 2 0 0 0-2 2v7.077a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM9.077 13.923H2a1 1 0 0 0-1 1V22a1 1 0 0 0 1 1h7.077a1 1 0 0 0 1-1v-7.077a1 1 0 0 0-1-1m-7.077-1a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h7.077a2 2 0 0 0 2-2v-7.077a2 2 0 0 0-2-2zM22 13.923h-7.077a1 1 0 0 0-1 1V22a1 1 0 0 0 1 1H22a1 1 0 0 0 1-1v-7.077a1 1 0 0 0-1-1m-7.077-1a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2v-7.077a2 2 0 0 0-2-2z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='3b6f628a4933f3369ca447a04525f686__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyTraderSHubIcon);
export default ForwardRef;
