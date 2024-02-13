import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkSmBoldIcon = (
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
      <path d='M9.684 7.496 6.43 10.75l3.254 3.254q.383.465 0 .93-.465.383-.93 0L5.5 11.68l-3.254 3.254q-.465.383-.93 0-.383-.465 0-.93L4.57 10.75 1.316 7.496q-.382-.465 0-.93.465-.383.93 0L5.5 9.82l3.254-3.254q.465-.383.93 0 .383.465 0 .93' />
    </g>
    <defs>
      <clipPath id='17a55f7619622149b4882b450f86d1f8__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkSmBoldIcon);
export default ForwardRef;
