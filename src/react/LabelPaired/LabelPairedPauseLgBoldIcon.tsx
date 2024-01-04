import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPauseLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 9.875v11.25H4V9.875H2.125Zm-1.875 0c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547H4c.52.026.964.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547H2.125a2.038 2.038 0 0 1-1.328-.547 2.039 2.039 0 0 1-.547-1.328V9.875Zm8.75 0v11.25h1.875V9.875H9Zm-1.875 0c.026-.52.208-.964.547-1.328C8.036 8.208 8.479 8.026 9 8h1.875c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547H9a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328V9.875Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseLgBoldIcon);
export default ForwardRef;
