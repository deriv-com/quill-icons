import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentSmBoldIcon = (
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
      <path d='m10.34 6.84-8.75 8.75q-.465.383-.93 0-.382-.465 0-.93l8.75-8.75q.465-.383.93 0 .383.465 0 .93m-7.027.41q-.028.738-.657 1.148a1.4 1.4 0 0 1-1.312 0q-.63-.41-.657-1.148.028-.738.657-1.148a1.4 1.4 0 0 1 1.312 0q.63.41.656 1.148m7 7q-.029.738-.657 1.148a1.4 1.4 0 0 1-1.312 0q-.63-.41-.656-1.148.026-.738.656-1.148a1.4 1.4 0 0 1 1.312 0q.63.41.656 1.148' />
    </g>
    <defs>
      <clipPath id='a765b4682cff98d60d806a73f250c259__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentSmBoldIcon);
export default ForwardRef;
