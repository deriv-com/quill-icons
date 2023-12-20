import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartAreaXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.25 8.625v16.5c.063.688.438 1.063 1.125 1.125h19.5c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-19.5c-.969-.031-1.766-.36-2.39-.984C.358 26.89.03 26.094 0 25.125v-16.5C.063 7.938.438 7.563 1.125 7.5c.688.063 1.063.438 1.125 1.125m11.156 7.969L10.5 13.687l-3.75 3.75v4.313h13.5v-3.656l-2.39-2.766-1.266 1.266A2.17 2.17 0 0 1 15 17.25a2.17 2.17 0 0 1-1.594-.656M15 15l1.594-1.594.281-.281a1.565 1.565 0 0 1 1.078-.422c.438.031.797.203 1.078.516l2.907 3.422c.375.406.562.89.562 1.453V22.5c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422H6c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078v-5.062c0-.625.219-1.157.656-1.594l4.266-4.266c.312-.312.672-.469 1.078-.469s.766.157 1.078.47l1.828 1.827z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaXlBoldIcon);
export default ForwardRef;
