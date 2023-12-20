import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenLineRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.438 5.25c-.355-.292-.709-.292-1.063 0l-1.719 1.688 2.406 2.406 1.688-1.719c.292-.354.292-.708 0-1.062zM2.594 15c-.23.25-.396.542-.5.875L1.25 18.75l2.875-.844c.333-.104.625-.27.875-.5l7.344-7.343-2.406-2.407zm9.062-10.469c.354-.333.771-.5 1.25-.5.459 0 .865.167 1.219.5l1.344 1.344c.333.354.5.76.5 1.219 0 .479-.167.896-.5 1.25l-9.781 9.781a2.96 2.96 0 0 1-1.25.75L.656 19.969c-.208.062-.375.02-.5-.125-.146-.125-.187-.282-.125-.469l1.094-3.781c.146-.5.406-.927.781-1.281zM7.5 19h10c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-10c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineRegularIcon);
export default ForwardRef;
