import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsRightLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M18.164 14.836c.365.443.365.885 0 1.328l-7.5 7.5c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l6.836-6.836-6.836-6.836c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0l7.5 7.5Zm-15-7.5 7.5 7.5c.365.443.365.885 0 1.328l-7.5 7.5c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328L8.672 15.5 1.836 8.664c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightLgBoldIcon);
export default ForwardRef;
