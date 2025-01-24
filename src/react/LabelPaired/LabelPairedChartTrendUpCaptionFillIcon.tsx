import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.578 3.594a.743.743 0 0 1 .328 1.008l-2.25 4.5c-.117.257-.375.398-.656.398H8.695l-2.789 5.602a.743.743 0 0 1-1.008.328l-4.5-2.25a.743.743 0 0 1-.328-1.008.743.743 0 0 1 1.008-.328l3.82 1.922L7.57 8.422A.73.73 0 0 1 8.25 8h3.281l2.04-4.078a.743.743 0 0 1 1.007-.328' />
    </g>
    <defs>
      <clipPath id='61ed84fd9fcf269119abc08c8d4ff103__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpCaptionFillIcon);
export default ForwardRef;
