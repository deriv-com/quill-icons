import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPauseLgFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M2.125 8h1.25c.52.026.964.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-1.25a2.038 2.038 0 0 1-1.328-.547 2.039 2.039 0 0 1-.547-1.328V9.875c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547Zm7.5 0h1.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-1.25a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328V9.875c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseLgFillIcon);
export default ForwardRef;
