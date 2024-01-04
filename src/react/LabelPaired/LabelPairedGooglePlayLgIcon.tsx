import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedGooglePlayLgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='m12.695 14.64 2.344-2.343-10.937-6.29 8.593 8.634ZM1.835 5.5l10.04 10-10.04 10c-.546-.287-.832-.742-.858-1.367V6.867c.026-.625.312-1.08.859-1.367Zm16.602 8.828c.391.287.586.677.586 1.172 0 .495-.182.885-.546 1.172l-2.344 1.367-2.54-2.539 2.54-2.5 2.305 1.328ZM4.102 24.992l8.593-8.633 2.344 2.344-10.937 6.29Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayLgIcon);
export default ForwardRef;
