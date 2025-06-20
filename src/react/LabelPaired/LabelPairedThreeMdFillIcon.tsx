import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeMdFillIcon = (
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
      <path d='M0 6c0-.531.438-1 1-1h7.5c.406 0 .781.281.906.656a.97.97 0 0 1-.25 1.094L5.062 10.5h.688A4.254 4.254 0 0 1 10 14.75 4.235 4.235 0 0 1 5.75 19H3.281a3.54 3.54 0 0 1-3.125-1.906l-.062-.125a.99.99 0 0 1 .437-1.344.99.99 0 0 1 1.344.438l.063.125c.25.5.78.812 1.343.812H5.75C6.969 17 8 16 8 14.75c0-1.219-1.031-2.25-2.25-2.25H2.5a.99.99 0 0 1-.937-.625.97.97 0 0 1 .25-1.094L5.906 7H1c-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='f5c9afb0d68d2fb207901b87454531f8__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeMdFillIcon);
export default ForwardRef;
