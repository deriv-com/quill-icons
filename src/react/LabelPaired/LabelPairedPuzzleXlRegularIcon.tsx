import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleXlRegularIcon = (
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
      <path d='M15 6h6c1.64 0 3 1.36 3 3v5.25c0 .844-.703 1.5-1.5 1.5H21A2.25 2.25 0 0 1 18.75 18a2.22 2.22 0 0 1-2.25-2.25H15a1.48 1.48 0 0 1-1.5-1.5v-1.125c0-.797.656-1.5 1.5-1.5h.75c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H15a1.48 1.48 0 0 1-1.5-1.5V7.5c0-.797.656-1.5 1.5-1.5m0 1.5v1.125h.75c1.219 0 2.25 1.031 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H15v1.125h2.25c.375 0 .75.375.75.75v.75c0 .422.328.75.75.75.375 0 .75-.328.75-.75V15c0-.375.328-.75.75-.75h2.25V9c0-.797-.703-1.5-1.5-1.5zM3 9h6.75c.797 0 1.5.703 1.5 1.5v8.25h1.5c.797 0 1.5.703 1.5 1.5V21c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-.75c0-.797.656-1.5 1.5-1.5h2.25c.797 0 1.5.703 1.5 1.5V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V12c0-1.64 1.313-3 3-3m6.75 1.5H3c-.844 0-1.5.703-1.5 1.5v6.75h2.25V18A2.25 2.25 0 0 1 6 15.75c1.219 0 2.25 1.031 2.25 2.25v.75h1.5zm-6 9.75H1.5V27c0 .844.656 1.5 1.5 1.5h6.75v-2.25H9A2.22 2.22 0 0 1 6.75 24 2.25 2.25 0 0 1 9 21.75h.75v-1.5h-1.5a1.48 1.48 0 0 1-1.5-1.5V18c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v.75c0 .844-.703 1.5-1.5 1.5m7.5 6v2.25H18c.797 0 1.5-.656 1.5-1.5v-6.75h-2.25V21A2.25 2.25 0 0 1 15 23.25 2.22 2.22 0 0 1 12.75 21v-.75h-1.5v1.5c0 .844-.703 1.5-1.5 1.5H9c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h.75c.797 0 1.5.703 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='bfbcbcd0d5bd3671b974a419f615be0f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleXlRegularIcon);
export default ForwardRef;
