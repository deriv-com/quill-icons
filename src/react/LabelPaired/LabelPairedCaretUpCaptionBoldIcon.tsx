import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretUpCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4 7.79 1.914 9.874h4.172L4 7.789Zm-.54-1.08A.782.782 0 0 1 4 6.5c.203 0 .383.07.54.21l3 3c.218.25.272.524.163.821A.768.768 0 0 1 7 11H1a.768.768 0 0 1-.703-.469c-.11-.297-.055-.57.164-.82l3-3Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpCaptionBoldIcon);
export default ForwardRef;
