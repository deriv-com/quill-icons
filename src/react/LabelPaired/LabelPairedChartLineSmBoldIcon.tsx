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
      <path d='M1.313 5.281v9.625q.054.602.656.656h11.375q.601.056.656.657-.055.601-.656.656H1.969q-.848-.027-1.395-.574-.546-.547-.574-1.395V5.281q.054-.601.656-.656.602.054.657.656m11.62 3.09L9.216 12.09q-.465.383-.93 0l-2.16-2.16-2.16 2.16q-.465.383-.93 0-.382-.465 0-.93L5.66 8.535a.63.63 0 0 1 .465-.191q.273 0 .465.191l2.16 2.16 3.254-3.254q.465-.383.93 0 .383.465 0 .93' />
    </g>
    <defs>
      <clipPath id='131ff2eb59f452988862a5d334083005__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineSmBoldIcon);
export default ForwardRef;
