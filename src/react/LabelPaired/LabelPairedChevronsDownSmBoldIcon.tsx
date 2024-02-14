import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownSmBoldIcon = (
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
      <path d='m6.535 16.465-5.25-5.25q-.382-.465 0-.93.465-.383.93 0L7 15.07l4.785-4.785q.465-.383.93 0 .383.465 0 .93l-5.25 5.25q-.465.382-.93 0m-5.25-10.5q-.382-.465 0-.93.465-.382.93 0L7 9.82l4.785-4.785q.465-.382.93 0 .383.465 0 .93l-5.25 5.25q-.465.383-.93 0z' />
    </g>
    <defs>
      <clipPath id='15f7723ddf849a599aadde50cf08b0f1__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownSmBoldIcon);
export default ForwardRef;
