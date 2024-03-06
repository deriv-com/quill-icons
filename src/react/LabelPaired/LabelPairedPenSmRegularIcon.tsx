import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenSmRegularIcon = (
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
      <path d='M10.828 4.844 9.324 6.32l2.106 2.106 1.476-1.504q.383-.465 0-.93l-1.148-1.148q-.465-.383-.93 0M8.695 6.949 2.27 13.375q-.302.328-.438.766l-.738 2.515 2.515-.738q.438-.137.766-.437l6.426-6.426zm3.664-2.734 1.176 1.176q.438.465.438 1.066 0 .63-.438 1.094l-8.558 8.531q-.465.492-1.094.684l-3.309.957q-.273.081-.437-.11-.191-.164-.11-.41l.957-3.308q.192-.657.657-1.122l8.558-8.558q.465-.438 1.094-.438.602 0 1.066.438' />
    </g>
    <defs>
      <clipPath id='21b221d105df030e02897d74d5b86809__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenSmRegularIcon);
export default ForwardRef;
