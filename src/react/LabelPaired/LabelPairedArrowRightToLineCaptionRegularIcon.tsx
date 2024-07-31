import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.75 5.375v8.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-8.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375M8.383 9.781l-3 3a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.368-2.367H.625A.37.37 0 0 1 .25 9.5c0-.187.164-.375.375-.375H7.21L4.845 6.781a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0l3 3c.14.14.14.399 0 .54' />
    </g>
    <defs>
      <clipPath id='43a6d045a5cd10fad781f667a20c0d1e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineCaptionRegularIcon);
export default ForwardRef;
