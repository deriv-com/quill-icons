import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.59 14.059-2.625 2.625q-.465.383-.93 0L8.41 14.059q-.383-.465 0-.93.465-.383.93 0l1.504 1.504V5.28q.054-.601.656-.656.602.054.656.656v9.352l1.504-1.504q.465-.383.93 0 .383.465 0 .93M4.965 4.816 7.59 7.441q.383.465 0 .93-.465.383-.93 0L5.156 6.867v9.352q-.054.601-.656.656-.602-.055-.656-.656V6.867L2.34 8.371q-.465.383-.93 0-.383-.465 0-.93l2.625-2.625q.465-.382.93 0' />
    </g>
    <defs>
      <clipPath id='7340cb56859b0b56c50f783101275a3f__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownSmBoldIcon);
export default ForwardRef;
