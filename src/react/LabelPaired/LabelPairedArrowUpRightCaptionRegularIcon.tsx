import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightCaptionRegularIcon = (
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
      <path d='M7.875 5.75c.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V7.039l-6.117 6.117a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539L6.962 6.5H2.625a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375z' />
    </g>
    <defs>
      <clipPath id='a241bda5c4745726ff183b3893ec5788__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightCaptionRegularIcon);
export default ForwardRef;
