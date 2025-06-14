import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 10.5v15c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75V14.016a.75.75 0 0 0-.234-.516l1.593-1.594c.563.563.844 1.313.844 2.11V25.5c0 1.688-1.312 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3h11.484c.797 0 1.547.328 2.11.89l3.515 3.516-1.593 1.594L15 9.984v-.046 4.687a1.11 1.11 0 0 1-1.125 1.125h-9c-.656 0-1.125-.469-1.125-1.125V9.75H3c-.422 0-.75.375-.75.75M6 9.75v3.75h6.75V9.75zM7.5 21c0-1.031.563-2.016 1.5-2.578.89-.516 2.063-.516 3 0 .89.562 1.5 1.547 1.5 2.578 0 1.078-.61 2.063-1.5 2.625-.937.516-2.11.516-3 0A3.05 3.05 0 0 1 7.5 21' />
    </g>
    <defs>
      <clipPath id='f71c10fffb181d11e7ef4649a71964f5__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskXlBoldIcon);
export default ForwardRef;
