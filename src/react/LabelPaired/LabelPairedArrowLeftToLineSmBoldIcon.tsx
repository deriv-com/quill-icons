import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineSmBoldIcon = (
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
      <path d='M.375 15.344V6.156q.054-.601.656-.656.602.054.657.656v9.188q-.055.601-.657.656-.601-.055-.656-.656m3.719-5.059 3.718-3.5q.465-.383.903.027.383.465-.027.93l-2.489 2.352h5.77q.601.054.656.656-.055.602-.656.656h-5.77l2.516 2.38q.383.435.027.929-.465.383-.93.027l-3.718-3.5a.68.68 0 0 1-.219-.492q0-.273.219-.465' />
    </g>
    <defs>
      <clipPath id='1523a19658ce6aeb6cb88a82b80408c7__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineSmBoldIcon);
export default ForwardRef;
