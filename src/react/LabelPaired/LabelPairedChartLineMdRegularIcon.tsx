import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.5v11q.03.625.438 1.063.436.405 1.062.437h13q.47.031.5.5-.03.47-.5.5h-13q-1.062-.03-1.781-.719Q.03 17.562 0 16.5v-11q.031-.469.5-.5.47.031.5.5m13.844 3.344-4.5 4.5q-.345.312-.688 0L7 10.719l-3.156 3.125q-.345.312-.688 0-.312-.345 0-.688l3.5-3.5q.345-.312.688 0L10 12.281l4.156-4.125q.345-.312.688 0 .312.345 0 .688' />
    </g>
    <defs>
      <clipPath id='64bbde8999503c7da119d3602005b2ec__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineMdRegularIcon);
export default ForwardRef;
