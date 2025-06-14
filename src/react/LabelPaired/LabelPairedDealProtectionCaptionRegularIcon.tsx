import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealProtectionCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.156 6.36h2.227c.398 0 .75.07 1.078.21.328.117.61.328.844.586s.422.586.539.985c.117.398.187.843.187 1.359 0 .54-.07.984-.187 1.383a2.5 2.5 0 0 1-.54.984 2.4 2.4 0 0 1-.843.586 2.7 2.7 0 0 1-1.078.211H2.156zm2.227 5.39c.469 0 .844-.14 1.125-.445.281-.282.445-.727.445-1.29V9.009c0-.563-.164-1.008-.445-1.29-.281-.304-.656-.445-1.125-.445H3.164v4.477zm3.914.89V6.36h2.695c.586 0 1.031.187 1.36.515.304.352.468.82.468 1.383 0 .586-.164 1.031-.468 1.383-.329.351-.774.515-1.36.515H9.305v2.485zm1.008-3.374h1.64c.258 0 .446-.07.586-.211s.211-.328.211-.586v-.422c0-.258-.07-.445-.21-.586-.141-.14-.329-.211-.587-.211h-1.64z' />
    </g>
    <defs>
      <clipPath id='72286f7771257255f85a5e69e70ec171__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionCaptionRegularIcon);
export default ForwardRef;
