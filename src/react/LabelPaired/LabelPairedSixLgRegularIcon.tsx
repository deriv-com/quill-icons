import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.5 18c0-2.734-2.266-5-5-5s-4.96 2.188-5 4.883V18c0 2.773 2.227 5 5 5 2.734 0 5-2.227 5-5m-6.328-6.094c.43-.078.86-.156 1.328-.156 3.438 0 6.25 2.813 6.25 6.25a6.243 6.243 0 0 1-6.25 6.25A6.22 6.22 0 0 1 .25 18v-.195a6.35 6.35 0 0 1 1.602-4.024l6.054-6.797c.196-.273.625-.273.86-.039.273.196.273.625.039.86z' />
    </g>
    <defs>
      <clipPath id='58bc0348c3676a0d142124fc3ba92232__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixLgRegularIcon);
export default ForwardRef;
