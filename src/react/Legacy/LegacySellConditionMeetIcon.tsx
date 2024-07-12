import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySellConditionMeetIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#b3f5b26c6b11fa4b92e0592715a28343__a)'>
      <path
        fill='#333'
        d='M7.4 8a.6.6 0 0 1 .6.6v4.659a.6.6 0 0 1-1.024.424L6 12.707l-2.576 2.576a.6.6 0 0 1-.848 0L.717 13.424a.6.6 0 0 1 0-.848L3.293 10l-.976-.976A.6.6 0 0 1 2.741 8zM7 9H3.707l1 1-3 3L3 14.293l3-3 1 1zM13.424.717l1.859 1.859a.6.6 0 0 1 0 .848L12.707 6l.976.976A.6.6 0 0 1 13.259 8H8.6a.6.6 0 0 1-.6-.6V2.741a.6.6 0 0 1 1.024-.424l.976.976L12.576.717a.6.6 0 0 1 .848 0m-.424.99-3 3-1-1V7h3.293l-1-1 3-3z'
      />
    </g>
    <defs>
      <clipPath id='b3f5b26c6b11fa4b92e0592715a28343__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySellConditionMeetIcon);
export default ForwardRef;
