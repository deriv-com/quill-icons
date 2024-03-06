import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZSmBoldIcon = (
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
      <path d='M1.41 14.059q-.383-.465 0-.93.465-.383.93 0l1.504 1.504V5.28q.054-.601.656-.656.602.054.656.656v9.352l1.504-1.504q.465-.383.93 0 .383.465 0 .93l-2.625 2.625q-.465.383-.93 0zm8.34-2.434h3.5a.7.7 0 0 1 .602.383.72.72 0 0 1-.11.71L11.2 15.564h2.051q.602.054.656.656-.054.601-.656.656h-3.5a.7.7 0 0 1-.602-.383.72.72 0 0 1 .11-.71l2.543-2.844H9.75q-.602-.056-.656-.657.054-.601.656-.656m1.75-7q.41.027.574.355l2.188 4.375q.219.575-.274.875-.574.219-.875-.273l-.383-.738h-2.46l-.383.738q-.3.492-.875.3-.492-.327-.274-.902l2.188-4.375q.191-.355.574-.355m-.574 3.281h1.148L11.5 6.758z' />
    </g>
    <defs>
      <clipPath id='e016d38014fc5bc22da141314e580bc8__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZSmBoldIcon);
export default ForwardRef;
