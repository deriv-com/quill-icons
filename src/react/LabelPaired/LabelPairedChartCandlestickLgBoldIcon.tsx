import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickLgBoldIcon = (
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
      <path d='M1.875 7.688v13.75c0 .546.39.937.938.937h16.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.813A2.8 2.8 0 0 1 0 21.438V7.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938M12.5 7.375V9.25c.664 0 1.25.586 1.25 1.25v3.75c0 .703-.586 1.25-1.25 1.25v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V15.5c-.703 0-1.25-.547-1.25-1.25V10.5c0-.664.547-1.25 1.25-1.25V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625M15 14.25c0-.664.547-1.25 1.25-1.25v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625V13c.664 0 1.25.586 1.25 1.25v2.5c0 .703-.586 1.25-1.25 1.25v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V18c-.703 0-1.25-.547-1.25-1.25zM6.25 10.5V8.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625V10.5c.664 0 1.25.586 1.25 1.25v5c0 .703-.586 1.25-1.25 1.25v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V18C5.547 18 5 17.453 5 16.75v-5c0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='f5c10f3192303ed0d3b2084ea1706cea__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickLgBoldIcon);
export default ForwardRef;
