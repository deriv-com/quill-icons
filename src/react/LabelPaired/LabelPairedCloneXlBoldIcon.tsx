import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneXlBoldIcon = (
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
      <path d='M3 27.75h10.5c.375 0 .75-.328.75-.75v-3h2.25v3c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V16.5c0-1.64 1.313-3 3-3h3v2.25H3c-.422 0-.75.375-.75.75V27c0 .422.328.75.75.75m7.5-7.5H21c.375 0 .75-.328.75-.75V9c0-.375-.375-.75-.75-.75H10.5c-.422 0-.75.375-.75.75v10.5c0 .422.328.75.75.75m-3-.75V9c0-1.64 1.313-3 3-3H21c1.64 0 3 1.36 3 3v10.5c0 1.688-1.36 3-3 3H10.5c-1.687 0-3-1.312-3-3' />
    </g>
    <defs>
      <clipPath id='508df1cc626f12ab27d3ec105ca7a0d2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneXlBoldIcon);
export default ForwardRef;
