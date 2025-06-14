import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m-.93-8.941c.22-.137.438-.22.711-.22h.082c.547 0 1.012.466 1.012 1.013 0 .273-.137.546-.328.738l-2.98 2.789a.69.69 0 0 0-.165.71.69.69 0 0 0 .63.411h3.937a.65.65 0 0 0 .656-.656c0-.356-.3-.656-.656-.656H6.672l1.777-1.641c.465-.438.711-1.04.711-1.695a2.33 2.33 0 0 0-2.27-2.325h-.109c-.547 0-1.066.164-1.504.493l-.656.492a.66.66 0 0 0-.137.93c.22.3.657.355.93.136z' />
    </g>
    <defs>
      <clipPath id='d71ec9f06ce3a64315121f16d2513068__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoSmFillIcon);
export default ForwardRef;
