import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineCaptionRegularIcon = (
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
      <path d='M.375 14.75A.37.37 0 0 1 0 14.375C0 14.188.164 14 .375 14h8.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375zm4.383-2.344a.397.397 0 0 1-.54 0l-3-3a.397.397 0 0 1 0-.539c.141-.14.4-.14.54 0l2.367 2.367V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v6.609l2.344-2.367c.14-.14.398-.14.539 0 .14.14.14.399 0 .54z' />
    </g>
    <defs>
      <clipPath id='1f3c9553d06964b5764e30e271e77362__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineCaptionRegularIcon);
export default ForwardRef;
