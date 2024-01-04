import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExclamationLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={30}
    viewBox='0 0 3 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 7.375V19.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625ZM1.5 23.938C.927 23.884.615 23.573.562 23c.053-.573.365-.885.938-.938.573.053.885.365.938.938-.053.573-.365.885-.938.938Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h3v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationLgRegularIcon);
export default ForwardRef;
