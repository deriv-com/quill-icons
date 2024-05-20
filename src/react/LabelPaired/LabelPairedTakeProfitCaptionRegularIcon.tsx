import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitCaptionRegularIcon = (
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
      <path d='M5.25 7.273v5.368H4.219V7.273H2.344V6.36h4.758v.914zm2.86 5.368V6.359h2.695c.586 0 1.03.188 1.36.516.304.352.468.82.468 1.383 0 .586-.164 1.031-.469 1.383-.328.351-.773.515-1.36.515H9.118v2.485zm1.007-3.375h1.617c.258 0 .47-.07.61-.211s.21-.328.21-.586v-.422c0-.258-.07-.445-.21-.586s-.352-.211-.61-.211H9.117z' />
    </g>
    <defs>
      <clipPath id='6056e1f9d7aa8ad0ae2a3bce3692a8ce__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitCaptionRegularIcon);
export default ForwardRef;
