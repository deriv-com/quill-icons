import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSmBoldIcon = (
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
      <path d='M2.406 4.625H12.47q.601.054.656.656-.055.601-.656.657H2.406q-.465 0-.765.328a1 1 0 0 0-.328.765v7.438q0 .465.328.765.3.33.765.329h9.188q.465 0 .765-.329a1 1 0 0 0 .329-.765V9.656q0-.465-.329-.765a1 1 0 0 0-.765-.328H3.28q-.601-.056-.656-.657.054-.601.656-.656h8.313q1.012.027 1.695.71.684.685.711 1.696v4.813q-.027 1.012-.71 1.695-.685.684-1.696.711H2.406q-1.012-.027-1.695-.71Q.027 15.48 0 14.468V7.03Q.027 6.02.71 5.336q.685-.684 1.696-.711m8.094 8.313a.85.85 0 0 1-.629-.247.85.85 0 0 1-.246-.629q0-.382.246-.628a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.628.85.85 0 0 1-.629.246' />
    </g>
    <defs>
      <clipPath id='2d2cc19bb7716788bdd7958c55ed3293__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSmBoldIcon);
export default ForwardRef;
