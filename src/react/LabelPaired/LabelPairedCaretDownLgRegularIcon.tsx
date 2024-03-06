import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownLgRegularIcon = (
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
      <path d='m6.734 19.172 4.688-4.453a.27.27 0 0 0 .078-.196.305.305 0 0 0-.273-.273H1.773a.305.305 0 0 0-.273.273q0 .118.078.196l4.688 4.453a.4.4 0 0 0 .234.078.4.4 0 0 0 .234-.078m.86.898q-.469.43-1.094.43t-1.094-.43L.72 15.656a1.54 1.54 0 0 1-.469-1.133q0-.664.43-1.093.429-.43 1.093-.43h9.454q.664.039 1.093.469.43.43.43 1.054 0 .664-.469 1.133z' />
    </g>
    <defs>
      <clipPath id='c45fd073e909e4871c1d4ae6028243c6__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownLgRegularIcon);
export default ForwardRef;
