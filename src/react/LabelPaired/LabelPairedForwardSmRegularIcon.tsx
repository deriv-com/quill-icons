import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.96 10.75 7 6.43v8.64zM6.946 5.5a.8.8 0 0 1 .492.164l6.29 4.567c.182.127.273.3.273.519a.602.602 0 0 1-.273.52l-6.29 4.566a.8.8 0 0 1-.492.164.731.731 0 0 1-.574-.246.731.731 0 0 1-.246-.574v-2.817l-4.812 3.473A.8.8 0 0 1 .82 16a.731.731 0 0 1-.574-.246A.731.731 0 0 1 0 15.18V6.32c0-.237.082-.428.246-.574A.731.731 0 0 1 .82 5.5a.8.8 0 0 1 .493.164l4.812 3.473V6.32c0-.237.082-.428.246-.574a.732.732 0 0 1 .574-.246m-.82 5.77v-1.04l-5.25-3.8v8.64z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardSmRegularIcon);
export default ForwardRef;
