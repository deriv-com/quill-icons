import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 3.75c.355 0 .656.3.656.656V5.5h1.094c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H9.656v8.53c0 .384-.3.657-.656.657a.63.63 0 0 1-.656-.656V14.25H7.25a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h1.094V4.406c0-.355.273-.656.656-.656m5.688 1.75c.355 0 .656.3.656.656v5.032h1.094c.355 0 .656.3.656.656 0 .383-.301.656-.657.656h-1.093v1.094c0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656V8.563h-1.094a.63.63 0 0 1-.656-.657c0-.355.274-.656.656-.656h1.094V6.156c0-.355.274-.656.656-.656M3.313 9c.355 0 .656.3.656.656v5.031h1.094c.355 0 .656.301.656.657 0 .383-.301.656-.657.656H3.97v1.094c0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656v-5.032H1.562a.63.63 0 0 1-.656-.656c0-.355.274-.656.657-.656h1.093V9.656c0-.355.274-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='2af2d5dae7c5f32eb4db2c7dd8eee900__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcSmBoldIcon);
export default ForwardRef;
