import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightToLineSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.625 6.156v9.188c-.037.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V6.156c.036-.4.255-.62.656-.656.4.036.62.255.656.656m-3.719 5.086.028-.027-3.72 3.5c-.327.255-.637.246-.929-.027-.255-.31-.246-.611.027-.903l2.516-2.379H1.031c-.4-.036-.62-.255-.656-.656.036-.401.255-.62.656-.656H6.828l-2.516-2.38c-.273-.29-.282-.592-.027-.902.292-.273.593-.282.902-.027l3.72 3.5a.596.596 0 0 1 .218.465.68.68 0 0 1-.219.492'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineSmBoldIcon);
export default ForwardRef;
