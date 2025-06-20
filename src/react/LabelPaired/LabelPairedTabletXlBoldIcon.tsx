import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletXlBoldIcon = (
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
      <path d='M3 8.25c-.422 0-.75.375-.75.75v18c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75V9c0-.375-.375-.75-.75-.75zM0 9c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v18c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm9 15.75h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='85c054f60b53bffb1a951c99a219fb25__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletXlBoldIcon);
export default ForwardRef;
