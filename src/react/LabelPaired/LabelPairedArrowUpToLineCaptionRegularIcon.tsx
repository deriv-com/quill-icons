import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 4.25h8.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.375A.37.37 0 0 1 0 4.625c0-.187.164-.375.375-.375m4.383 2.367 3 3c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L4.876 7.788v6.586c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V7.79l-2.367 2.366a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l3-3c.141-.14.4-.14.54 0' />
    </g>
    <defs>
      <clipPath id='b7d3772b1dba99604b3fbd67e7d8b9b2__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineCaptionRegularIcon);
export default ForwardRef;
