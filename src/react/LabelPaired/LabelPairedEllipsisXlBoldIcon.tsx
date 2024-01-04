import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEllipsisXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M20.25 18c-.031.844-.406 1.5-1.125 1.969-.75.375-1.5.375-2.25 0-.719-.469-1.094-1.125-1.125-1.969.031-.844.406-1.5 1.125-1.969.75-.375 1.5-.375 2.25 0 .719.469 1.094 1.125 1.125 1.969Zm-7.5 0c-.031.844-.406 1.5-1.125 1.969-.75.375-1.5.375-2.25 0C8.656 19.5 8.281 18.844 8.25 18c.031-.844.406-1.5 1.125-1.969.75-.375 1.5-.375 2.25 0 .719.469 1.094 1.125 1.125 1.969ZM3 20.25c-.844-.031-1.5-.406-1.969-1.125-.375-.75-.375-1.5 0-2.25C1.5 16.156 2.156 15.781 3 15.75c.844.031 1.5.406 1.969 1.125.375.75.375 1.5 0 2.25C4.5 19.844 3.844 20.219 3 20.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisXlBoldIcon);
export default ForwardRef;
