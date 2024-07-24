import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 10a3.03 3.03 0 0 0 1.5 2.625c.906.531 2.063.531 3 0C7.406 12.063 8 11.094 8 10c0-1.062-.594-2.031-1.5-2.594-.937-.531-2.094-.531-3 0C2.563 7.97 2 8.938 2 10m2.719 5C2.094 14.875 0 12.688 0 10c0-2.75 2.219-5 5-5 2.75 0 5 2.25 5 5 0 .094-.031.188-.031.25-.031 1.125-.469 2.188-1.188 3.063L4.25 18.656c-.344.438-1 .469-1.406.125-.438-.343-.469-1-.125-1.406z' />
    </g>
    <defs>
      <clipPath id='6f455dcd89c94819b7a80fd7ef680e4e__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineMdFillIcon);
export default ForwardRef;
