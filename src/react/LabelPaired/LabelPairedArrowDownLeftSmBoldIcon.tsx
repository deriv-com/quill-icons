import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.781 15.125q-.601-.055-.656-.656V7.906q.054-.601.656-.656.601.054.657.656v4.977l6.316-6.317q.465-.383.93 0 .383.465 0 .93l-6.317 6.317h4.977q.601.054.656.656-.054.601-.656.656z' />
    </g>
    <defs>
      <clipPath id='8ce6b5a6487b64ae1a6d68d5b3850d4c__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftSmBoldIcon);
export default ForwardRef;
