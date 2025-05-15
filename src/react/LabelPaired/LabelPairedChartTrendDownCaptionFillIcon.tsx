import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownCaptionFillIcon = (
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
      <path d='M4.898 3.594a.743.743 0 0 1 1.008.328L8.696 9.5H12c.281 0 .54.164.656.422l2.25 4.5a.743.743 0 0 1-.328 1.008.743.743 0 0 1-1.008-.328L11.531 11H8.25c-.305 0-.562-.14-.68-.398L4.898 5.258 1.078 7.18A.743.743 0 0 1 .07 6.852a.743.743 0 0 1 .328-1.008z' />
    </g>
    <defs>
      <clipPath id='dd77e76fba25a5f3f048387ef1e65d3a__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownCaptionFillIcon);
export default ForwardRef;
