import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 5.5c.664 0 1.25.586 1.25 1.25v.781c2.852.547 5 3.086 5 6.094v.742c0 1.836.664 3.633 1.875 5l.273.313c.352.39.43.898.235 1.367-.195.43-.664.703-1.133.703h-15c-.508 0-.977-.273-1.172-.703a1.26 1.26 0 0 1 .235-1.367l.273-.313a7.6 7.6 0 0 0 1.914-5v-.742c0-3.008 2.148-5.547 5-6.094V6.75c0-.664.547-1.25 1.25-1.25m1.758 19.297c-.469.469-1.094.703-1.758.703s-1.328-.234-1.797-.703S6.5 23.664 6.5 23h5c0 .664-.273 1.328-.742 1.797' />
    </g>
    <defs>
      <clipPath id='8d80f2c1b9c40972a4841e14aefacfdf__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellLgFillIcon);
export default ForwardRef;
