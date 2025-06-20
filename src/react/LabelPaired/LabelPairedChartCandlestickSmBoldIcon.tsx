import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.313 5.281v9.625c0 .383.273.656.656.656h11.375c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H1.969A1.96 1.96 0 0 1 0 14.906V5.281c0-.355.273-.656.656-.656.356 0 .657.3.657.656m7.437-.218v1.312a.9.9 0 0 1 .875.875v2.625c0 .492-.41.875-.875.875v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V10.75A.864.864 0 0 1 7 9.875V7.25c0-.465.383-.875.875-.875V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m1.75 4.812c0-.465.383-.875.875-.875V7.688a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V9a.9.9 0 0 1 .875.875v1.75c0 .492-.41.875-.875.875v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V12.5a.864.864 0 0 1-.875-.875zM4.375 7.25V5.938a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V7.25a.9.9 0 0 1 .875.875v3.5c0 .492-.41.875-.875.875v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V12.5a.864.864 0 0 1-.875-.875v-3.5c0-.465.383-.875.875-.875' />
    </g>
    <defs>
      <clipPath id='1b13b9da5bdd4ca4d5a885ee944357d5__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickSmBoldIcon);
export default ForwardRef;
