import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListXlFillIcon = (
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
      <path d='M0 10.5c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm4.5 9c.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5m1.5-6c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5M4.5 24c.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5M9 12.375A1.11 1.11 0 0 0 7.875 13.5c0 .656.469 1.125 1.125 1.125h7.5a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125zm0 4.5A1.11 1.11 0 0 0 7.875 18c0 .656.469 1.125 1.125 1.125h7.5A1.11 1.11 0 0 0 17.625 18a1.14 1.14 0 0 0-1.125-1.125zm0 4.5A1.11 1.11 0 0 0 7.875 22.5c0 .656.469 1.125 1.125 1.125h7.5a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='dd3c9a09f2a4e32c19c2835dbb378b98__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListXlFillIcon);
export default ForwardRef;
