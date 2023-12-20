import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedXmarkXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M16.172 12.422 10.594 18l5.578 5.578c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0L9 19.594l-5.578 5.578c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594L7.406 18l-5.578-5.578c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0L9 16.406l5.578-5.578c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkXlBoldIcon);
export default ForwardRef;
