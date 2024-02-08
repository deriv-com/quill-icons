import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaSmBoldIcon = (
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
      <path d='M1.313 5.281v9.625q.054.602.656.656h11.375q.601.056.656.657-.055.601-.656.656H1.969q-.848-.027-1.395-.574-.546-.547-.574-1.395V5.281q.054-.601.656-.656.602.054.657.656M7.82 9.93 6.125 8.234l-2.187 2.188v2.515h7.874v-2.132L10.419 9.19l-.738.739a1.27 1.27 0 0 1-.93.383q-.547 0-.93-.383M8.75 9l.93-.93.164-.164a.91.91 0 0 1 .629-.246.9.9 0 0 1 .629.3l1.695 1.997q.328.356.328.848v2.57a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246H3.5a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629v-2.953q0-.547.383-.93l2.488-2.488a.86.86 0 0 1 .629-.274q.356 0 .629.274L7.82 8.07z' />
    </g>
    <defs>
      <clipPath id='142c5837968d76fd73d901fda1d8b612__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaSmBoldIcon);
export default ForwardRef;
