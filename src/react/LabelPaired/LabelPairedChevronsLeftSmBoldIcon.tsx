import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftSmBoldIcon = (
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
      <path d='m1.285 10.285 5.25-5.25q.465-.382.93 0 .383.465 0 .93L2.68 10.75l4.785 4.785q.383.465 0 .93-.465.382-.93 0l-5.25-5.25q-.382-.465 0-.93m10.5-5.25q.465-.382.93 0 .383.465 0 .93L7.93 10.75l4.785 4.785q.383.465 0 .93-.465.382-.93 0l-5.25-5.25q-.383-.465 0-.93z' />
    </g>
    <defs>
      <clipPath id='da86205b6d2c454f99f3ff6e8b847d3a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftSmBoldIcon);
export default ForwardRef;
