import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.465 9.684-3.5 3.5q-.465.383-.93 0l-3.5-3.5q-.382-.465 0-.93.465-.383.93 0l2.379 2.379V4.406q.054-.601.656-.656.602.054.656.656v6.727l2.38-2.38q.465-.381.929 0 .383.465 0 .93m-8.777 3.472v2.188q0 .465.328.765.3.329.765.328h7.438q.465 0 .765-.328a1 1 0 0 0 .329-.765v-2.188q.054-.601.656-.656.601.055.656.656v2.188q-.027 1.012-.71 1.695-.685.684-1.696.711H2.78q-1.012-.027-1.695-.71-.684-.685-.711-1.696v-2.188q.054-.601.656-.656.602.055.657.656' />
    </g>
    <defs>
      <clipPath id='503ba4b9cbe3b85d9a2198fd7a2ab533__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketSmBoldIcon);
export default ForwardRef;
