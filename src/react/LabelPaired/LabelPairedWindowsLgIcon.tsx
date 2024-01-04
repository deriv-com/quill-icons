import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowsLgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 9.172v5.937h7.188V8.156L.25 9.172Zm0 12.656v-5.86h7.188v6.876L.25 21.828Zm7.969 1.094v-6.953h9.531v8.281l-9.531-1.328Zm0-14.844L17.75 6.75v8.36H8.219V8.077Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowsLgIcon);
export default ForwardRef;
