import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.969 5v.031h.593c.22.032.407.188.438.407a.45.45 0 0 1-.219.53A5.488 5.488 0 0 0 10.47 16.25c.312.001.625.001.937-.062.219-.03.438.063.531.25.094.22.063.438-.093.594A6.95 6.95 0 0 1 6.969 19C3.125 19 0 15.875 0 12c0-3.844 3.125-7 6.969-7' />
    </g>
    <defs>
      <clipPath id='aa6056a42d368835f727d67bef8ce62d__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonMdFillIcon);
export default ForwardRef;
