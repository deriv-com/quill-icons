import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSevenLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M.25 7.375c.026-.39.234-.599.625-.625h11.25c.234 0 .417.104.547.313a.664.664 0 0 1 0 .625l-10 16.25c-.235.312-.521.39-.86.234-.312-.235-.377-.521-.195-.86L10.992 8H.875c-.39-.026-.599-.234-.625-.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenLgRegularIcon);
export default ForwardRef;
