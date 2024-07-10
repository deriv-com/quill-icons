import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareXlFillIcon = (
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
      <path d='m13.031 6.469 4.5 4.5c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L13.5 11.155V21c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-9.844l-1.969 1.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l4.5-4.5a1.445 1.445 0 0 1 2.11 0M3 11.25v15c0 .422.328.75.75.75h16.5c.375 0 .75-.328.75-.75v-15c0-.375-.375-.75-.75-.75h-.375a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h.375A3.76 3.76 0 0 1 24 11.25v15c0 2.11-1.687 3.75-3.75 3.75H3.75C1.64 30 0 28.36 0 26.25v-15C0 9.188 1.64 7.5 3.75 7.5h.375c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75c-.422 0-.75.375-.75.75' />
    </g>
    <defs>
      <clipPath id='b05053cc0e8bca1665e577be88ea1ad8__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareXlFillIcon);
export default ForwardRef;
