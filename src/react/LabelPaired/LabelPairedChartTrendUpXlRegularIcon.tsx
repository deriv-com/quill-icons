import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M28.828 6.844a.77.77 0 0 1 .328 1.031l-4.5 9a.75.75 0 0 1-.656.375h-7.078l-5.766 11.625a.77.77 0 0 1-1.031.328l-9-4.5a.77.77 0 0 1-.328-1.031.77.77 0 0 1 1.031-.328l8.297 4.172 5.672-11.344c.14-.235.375-.422.703-.422h7.031l4.266-8.578a.77.77 0 0 1 1.031-.328' />
    </g>
    <defs>
      <clipPath id='2b2a1425e30386731f24ba8be8aebfa4__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpXlRegularIcon);
export default ForwardRef;
