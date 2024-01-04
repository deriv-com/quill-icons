import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEllipsisVerticalLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={30}
    viewBox='0 0 5 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.5 19.875c.703.026 1.25.338 1.64.938.313.625.313 1.25 0 1.875-.39.599-.937.911-1.64.937-.703-.026-1.25-.338-1.64-.938-.313-.625-.313-1.25 0-1.875.39-.599.937-.911 1.64-.937Zm0-6.25c.703.026 1.25.338 1.64.938.313.624.313 1.25 0 1.874-.39.6-.937.912-1.64.938-.703-.026-1.25-.338-1.64-.938-.313-.625-.313-1.25 0-1.875.39-.598.937-.911 1.64-.937ZM4.375 9.25c-.026.703-.339 1.25-.938 1.64-.624.313-1.25.313-1.874 0-.6-.39-.912-.937-.938-1.64.026-.703.339-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .598.39.911.937.937 1.64Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h5v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalLgBoldIcon);
export default ForwardRef;
