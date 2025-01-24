import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterXlFillIcon = (
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
      <path d='M3 6h10.5c.797 0 1.5.703 1.5 1.5v3c0 .844-.703 1.5-1.5 1.5H9.75v1.5h10.172c1.453 0 2.719 1.125 2.953 2.578l1.031 6.985c.047.234.094.468.094.703V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-3.234c0-.235 0-.47.047-.657l1.031-7.03c.234-1.454 1.5-2.579 3-2.579H6.75V12H3a1.48 1.48 0 0 1-1.5-1.5v-3C1.5 6.703 2.156 6 3 6m1.5 2.25c-.422 0-.75.375-.75.75 0 .422.328.75.75.75H12c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zm-1.5 18c0 .422.328.75.75.75h16.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H3.75c-.422 0-.75.375-.75.75m2.25-7.875a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125 1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125m5.625-1.125a1.14 1.14 0 0 0-1.125-1.125 1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125M7.5 22.125A1.11 1.11 0 0 0 8.625 21 1.14 1.14 0 0 0 7.5 19.875 1.11 1.11 0 0 0 6.375 21c0 .656.469 1.125 1.125 1.125m7.875-4.875a1.14 1.14 0 0 0-1.125-1.125 1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125M12 22.125A1.11 1.11 0 0 0 13.125 21 1.14 1.14 0 0 0 12 19.875 1.11 1.11 0 0 0 10.875 21c0 .656.469 1.125 1.125 1.125m7.875-4.875a1.14 1.14 0 0 0-1.125-1.125 1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125M16.5 22.125A1.11 1.11 0 0 0 17.625 21a1.14 1.14 0 0 0-1.125-1.125A1.11 1.11 0 0 0 15.375 21c0 .656.469 1.125 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='65e6886fc8780efde2e650fd67dbd0ec__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterXlFillIcon);
export default ForwardRef;
