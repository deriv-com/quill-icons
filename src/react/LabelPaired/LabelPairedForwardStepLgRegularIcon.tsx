import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardStepLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M10.25 8.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v13.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5.313l-6.992 5.704a.985.985 0 0 1-.664.234 1.06 1.06 0 0 1-.781-.313 1.06 1.06 0 0 1-.313-.78V9.093c0-.313.104-.573.313-.781A1.06 1.06 0 0 1 2.593 8c.261 0 .483.078.665.234l6.992 5.704V8.625Zm-7.5.82v12.11l7.46-6.055-7.46-6.055Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgRegularIcon);
export default ForwardRef;
