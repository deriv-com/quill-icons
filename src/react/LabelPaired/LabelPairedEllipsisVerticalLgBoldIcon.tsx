import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisVerticalLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 5 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.5 19.875c.703.026 1.25.338 1.64.938.313.625.313 1.25 0 1.875-.39.599-.937.911-1.64.937-.703-.026-1.25-.338-1.64-.937-.313-.625-.313-1.25 0-1.875.39-.6.937-.912 1.64-.938m0-6.25c.703.026 1.25.338 1.64.938.313.624.313 1.25 0 1.874-.39.6-.937.912-1.64.938-.703-.026-1.25-.338-1.64-.937-.313-.625-.313-1.25 0-1.875.39-.6.937-.912 1.64-.938M4.375 9.25c-.026.703-.339 1.25-.937 1.64-.626.313-1.25.313-1.876 0-.598-.39-.911-.937-.937-1.64.026-.703.339-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .598.39.911.937.937 1.64'
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
