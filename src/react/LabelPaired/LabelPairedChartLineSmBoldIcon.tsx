import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineSmBoldIcon = (
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
      <path d='M1.313 5.281v9.625c0 .383.273.656.656.656h11.375c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H1.969A1.96 1.96 0 0 1 0 14.906V5.281c0-.355.273-.656.656-.656.356 0 .657.3.657.656m11.62 3.09L9.189 12.09a.6.6 0 0 1-.903 0l-2.16-2.16-2.16 2.16c-.274.273-.684.273-.93 0a.6.6 0 0 1 0-.902L5.66 8.562c.11-.136.274-.19.465-.19a.64.64 0 0 1 .465.19l2.16 2.16 3.254-3.253c.246-.274.656-.274.93 0a.644.644 0 0 1 0 .902' />
    </g>
    <defs>
      <clipPath id='9a5405c55c8da84badd6cc9c637f3203__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineSmBoldIcon);
export default ForwardRef;
