import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareXlFillIcon = (
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
      <path d='M15 6h7.5c.797 0 1.5.703 1.5 1.5V15c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 21 15v-3.844l-9.469 9.422c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11L18.845 9H15a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5M3.75 7.5H9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75c-.422 0-.75.375-.75.75v15c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75V21c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v5.25c0 2.11-1.687 3.75-3.75 3.75h-15C1.64 30 0 28.36 0 26.25v-15C0 9.188 1.64 7.5 3.75 7.5' />
    </g>
    <defs>
      <clipPath id='b0953a988269115a2dbc9c9212055f9e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareXlFillIcon);
export default ForwardRef;
