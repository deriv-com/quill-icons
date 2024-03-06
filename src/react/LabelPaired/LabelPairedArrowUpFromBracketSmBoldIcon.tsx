import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketSmBoldIcon = (
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
      <path d='m6.965 3.941 3.5 3.5q.383.465 0 .93-.465.383-.93 0L7.156 5.992v6.727q-.054.601-.656.656-.602-.055-.656-.656V5.992l-2.38 2.38q-.465.381-.929 0-.382-.465 0-.93l3.5-3.5q.465-.384.93 0m-5.277 9.215v2.188q0 .465.328.765.3.329.765.328h7.438q.465 0 .765-.328a1 1 0 0 0 .329-.765v-2.188q.054-.601.656-.656.601.055.656.656v2.188q-.027 1.012-.71 1.695-.685.684-1.696.711H2.78q-1.012-.027-1.695-.71-.684-.685-.711-1.696v-2.188q.054-.601.656-.656.602.055.657.656' />
    </g>
    <defs>
      <clipPath id='f5c5ae2c8f11f55d77c26e2925370af2__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketSmBoldIcon);
export default ForwardRef;
