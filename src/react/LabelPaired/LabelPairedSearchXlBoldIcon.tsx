import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSearchXlBoldIcon = (
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
        d='M17.25 15.75a7.47 7.47 0 0 0-.984-3.75A7.817 7.817 0 0 0 13.5 9.234a7.642 7.642 0 0 0-3.75-.984A7.642 7.642 0 0 0 6 9.234 7.817 7.817 0 0 0 3.234 12a7.47 7.47 0 0 0-.984 3.75 7.47 7.47 0 0 0 .984 3.75A7.817 7.817 0 0 0 6 22.266a7.642 7.642 0 0 0 3.75.984 7.642 7.642 0 0 0 3.75-.984 7.817 7.817 0 0 0 2.766-2.766 7.47 7.47 0 0 0 .984-3.75m-1.453 7.64c-1.688 1.376-3.703 2.079-6.047 2.11-2.75-.062-5.047-1.016-6.89-2.86C1.015 20.798.062 18.5 0 15.75.063 13 1.016 10.703 2.86 8.86 4.702 7.015 7 6.062 9.75 6c2.75.063 5.047 1.016 6.89 2.86 1.844 1.843 2.797 4.14 2.86 6.89-.031 2.344-.734 4.36-2.11 6.047l6.282 6.281c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchXlBoldIcon);
export default ForwardRef;
