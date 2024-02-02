import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownXlRegularIcon = (
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
      <path d='M28.828 29.203a.77.77 0 0 1-1.031-.328L23.53 20.25H16.5c-.328 0-.562-.14-.703-.375L10.125 8.531l-8.297 4.172c-.375.188-.844 0-1.031-.328a.77.77 0 0 1 .328-1.031l9-4.5a.77.77 0 0 1 1.031.328l5.766 11.578H24c.281 0 .516.188.656.422l4.5 9a.77.77 0 0 1-.328 1.031' />
    </g>
    <defs>
      <clipPath id='5ee12e16501f088e__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownXlRegularIcon);
export default ForwardRef;
