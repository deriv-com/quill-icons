import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFourLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.797 7.648 1.64 18h9.609v-6.875c.026-.39.234-.599.625-.625.39.026.599.234.625.625V18h1.875c.39.026.599.234.625.625-.026.39-.234.599-.625.625H12.5v4.375c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V19.25H.625a.634.634 0 0 1-.547-.273.664.664 0 0 1 0-.625l5.625-11.25c.182-.339.456-.43.82-.274.339.208.43.482.274.82Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourLgRegularIcon);
export default ForwardRef;
