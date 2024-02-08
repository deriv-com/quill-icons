import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckSmBoldIcon = (
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
      <path d='M12.434 6.566q.383.465 0 .93l-7.22 7.219q-.464.383-.929 0L.566 10.996q-.382-.465 0-.93.465-.383.93 0L4.75 13.32l6.754-6.754q.465-.383.93 0' />
    </g>
    <defs>
      <clipPath id='a854f07e039fb3545a344cc3c16b968e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckSmBoldIcon);
export default ForwardRef;
