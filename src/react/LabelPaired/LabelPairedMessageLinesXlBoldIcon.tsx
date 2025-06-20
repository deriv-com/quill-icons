import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesXlBoldIcon = (
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
      <path d='M9.75 25.5v.75l3.375-2.531a2.27 2.27 0 0 1 1.36-.469H21c.375 0 .75-.328.75-.75V9c0-.375-.375-.75-.75-.75H3c-.422 0-.75.375-.75.75v13.5c0 .422.328.75.75.75h4.5c1.219 0 2.25 1.031 2.25 2.25m-.047 3.61-.234.14-.797.61c-.235.187-.516.187-.797.093-.234-.14-.375-.375-.375-.703V25.5H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3v13.5c0 1.688-1.36 3-3 3h-6.516L9.75 29.063zM7.125 12.75h9.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 16.875 15h-9.75C6.469 15 6 14.531 6 13.875c0-.61.469-1.125 1.125-1.125m0 4.5h5.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-5.25C6.469 19.5 6 19.031 6 18.375c0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='c73171072ef13822cf656ef3a2c8cddf__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesXlBoldIcon);
export default ForwardRef;
