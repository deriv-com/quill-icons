import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSixXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.75 21c-.031-1.5-.547-2.734-1.547-3.703-.969-1-2.203-1.516-3.703-1.547-1.562.031-2.844.594-3.844 1.688l-.234.28C2.64 18.689 2.25 19.782 2.25 21c.031 1.5.547 2.734 1.547 3.703.969 1 2.203 1.516 3.703 1.547 1.5-.031 2.734-.547 3.703-1.547 1-.969 1.516-2.203 1.547-3.703m-5.906-7.453c.218-.031.437-.047.656-.047 2.125.063 3.89.797 5.297 2.203C14.203 17.11 14.937 18.875 15 21c-.062 2.125-.797 3.89-2.203 5.297-1.406 1.406-3.172 2.14-5.297 2.203-2.125-.062-3.89-.797-5.297-2.203C.797 24.89.063 23.125 0 21c.031-2 .688-3.687 1.969-5.062l6.515-8.016c.5-.5 1.032-.563 1.594-.188.5.5.563 1.032.188 1.594z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixXlBoldIcon);
export default ForwardRef;
