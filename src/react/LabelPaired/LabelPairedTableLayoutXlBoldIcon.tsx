import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21 9.75H3c-.422 0-.75.375-.75.75v3h19.5v-3c0-.375-.375-.75-.75-.75M2.25 25.5c0 .422.328.75.75.75h3.75v-10.5h-4.5zm6.75.75h12c.375 0 .75-.328.75-.75v-9.75H9zM3 7.5h18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3' />
    </g>
    <defs>
      <clipPath id='8452ff8ee7f0d755cc7e9f595d002ce6__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutXlBoldIcon);
export default ForwardRef;
