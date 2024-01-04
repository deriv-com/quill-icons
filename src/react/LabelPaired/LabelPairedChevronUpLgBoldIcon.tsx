import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronUpLgBoldIcon = (
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
        d='M9.336 9.836c.443-.365.885-.365 1.328 0l7.5 7.5c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0L10 11.828l-6.836 6.836c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l7.5-7.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpLgBoldIcon);
export default ForwardRef;
