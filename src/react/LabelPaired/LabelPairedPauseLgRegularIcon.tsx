import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPauseLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M2.125 9.25c-.39.026-.599.234-.625.625v11.25c.026.39.234.599.625.625H4c.39-.026.599-.234.625-.625V9.875c-.026-.39-.234-.599-.625-.625H2.125ZM.25 9.875c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547H4c.52.026.964.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547H2.125a2.038 2.038 0 0 1-1.328-.547 2.039 2.039 0 0 1-.547-1.328V9.875ZM9 9.25c-.39.026-.599.234-.625.625v11.25c.026.39.234.599.625.625h1.875c.39-.026.599-.234.625-.625V9.875c-.026-.39-.234-.599-.625-.625H9Zm-1.875.625c.026-.52.208-.964.547-1.328C8.036 8.208 8.479 8.026 9 8h1.875c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547H9a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328V9.875Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseLgRegularIcon);
export default ForwardRef;
