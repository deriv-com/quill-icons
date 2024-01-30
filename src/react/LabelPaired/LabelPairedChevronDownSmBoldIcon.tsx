import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownSmBoldIcon = (
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
      <path d='m6.535 14.715-5.25-5.25q-.382-.465 0-.93.465-.383.93 0L7 13.32l4.785-4.785q.465-.383.93 0 .383.465 0 .93l-5.25 5.25q-.465.383-.93 0' />
    </g>
    <defs>
      <clipPath id='8524a6fde969d0a72c63c185e5abe371__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownSmBoldIcon);
export default ForwardRef;
