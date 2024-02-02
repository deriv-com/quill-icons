import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardSmFillIcon = (
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
      <path d='M1.45 15.809q-.438.328-.958.109-.465-.246-.492-.793v-8.75q.027-.547.492-.793.52-.22.957.11l4.676 3.91v2.296zM7 13.375v-7q.027-.547.492-.793.52-.22.957.11l5.25 4.374q.3.274.301.684 0 .41-.3.684l-5.25 4.375q-.438.328-.958.109-.465-.246-.492-.793z' />
    </g>
    <defs>
      <clipPath id='5fc900cc5ba819034786eb81d53291ad__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardSmFillIcon);
export default ForwardRef;
