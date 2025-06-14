import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.25 6.75H2.75c-.703 0-1.25.586-1.25 1.25v7.5h20V8c0-.664-.586-1.25-1.25-1.25m2.5 8.75v3.75c0 1.406-1.133 2.5-2.5 2.5h-5.86l.43 2.5h2.305c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H5.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.266l.43-2.5H2.75a2.47 2.47 0 0 1-2.5-2.5V8c0-1.367 1.094-2.5 2.5-2.5h17.5c1.367 0 2.5 1.133 2.5 2.5zM1.5 16.75v2.5c0 .703.547 1.25 1.25 1.25h17.5c.664 0 1.25-.547 1.25-1.25v-2.5zm7.89 7.5h4.18l-.43-2.5H9.82z' />
    </g>
    <defs>
      <clipPath id='a761a0b04d6aae34abd1a1d410197e06__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopLgRegularIcon);
export default ForwardRef;
