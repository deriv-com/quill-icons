import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLightChartLineUpDownClockSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v9.625c0 .738.574 1.312 1.313 1.312H9.52c.164.328.355.629.574.875H2.438A2.16 2.16 0 0 1 .25 14.688zm2.734 5.824L5.61 8.262a.453.453 0 0 1 .329-.137.44.44 0 0 1 .3.137l1.887 1.886c1.23-1.257 2.488-2.515 3.746-3.773h-1.559a.432.432 0 0 1-.437-.437.45.45 0 0 1 .438-.438h2.624a.47.47 0 0 1 .438.438v2.625a.45.45 0 0 1-.437.437.432.432 0 0 1-.438-.437v-1.56c-1.367 1.368-2.734 2.708-4.074 4.075a.463.463 0 0 1-.63 0C7.169 10.45 6.54 9.82 5.938 9.191c-.792.766-1.558 1.559-2.324 2.325a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.63m6.891 2.925c0-2.16 1.75-3.937 3.938-3.937 2.16 0 3.937 1.777 3.937 3.938a3.938 3.938 0 0 1-3.937 3.937 3.921 3.921 0 0 1-3.938-3.937m.875 0a3.057 3.057 0 0 0 3.063 3.063 3.075 3.075 0 0 0 3.062-3.062c0-1.668-1.395-3.063-3.062-3.063a3.075 3.075 0 0 0-3.063 3.063m2.625-1.75a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v1.312h.875a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-1.312a.432.432 0 0 1-.438-.437z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockSmRegularIcon);
export default ForwardRef;
