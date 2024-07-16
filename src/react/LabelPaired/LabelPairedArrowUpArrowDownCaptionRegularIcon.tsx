import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.258 4.367 2.25 2.25c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L4.376 5.538v8.836c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V5.539L2.008 7.156a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.25-2.25c.141-.14.4-.14.54 0m8.25 8.04-2.25 2.25a.397.397 0 0 1-.54 0l-2.25-2.25a.397.397 0 0 1 0-.54c.141-.14.4-.14.54 0l1.617 1.617V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v8.86l1.594-1.618c.14-.14.398-.14.539 0 .14.14.14.399 0 .54' />
    </g>
    <defs>
      <clipPath id='2d036c05a852da8b33a8b4c2992719a4__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownCaptionRegularIcon);
export default ForwardRef;
