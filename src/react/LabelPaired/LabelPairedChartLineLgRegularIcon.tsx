import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 7.375v13.75C1.25 22.18 2.07 23 3.125 23h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.125C1.367 24.25 0 22.883 0 21.125V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625m17.305 4.219-5.625 5.625a.66.66 0 0 1-.899 0l-3.281-3.32-3.945 3.945a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l4.375-4.375a.66.66 0 0 1 .899 0l3.32 3.32 5.156-5.195a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899' />
    </g>
    <defs>
      <clipPath id='5d360901e6b20cba5f7cfbbe00f97116__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineLgRegularIcon);
export default ForwardRef;
