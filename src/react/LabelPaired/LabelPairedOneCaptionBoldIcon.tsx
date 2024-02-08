import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.563 4.813v8.812h1.874q.516.047.563.563-.047.514-.562.562H.563q-.516-.047-.563-.562.047-.516.563-.563h1.875V5.82l-1.594.961q-.445.235-.774-.164-.21-.468.188-.773l2.437-1.5a.6.6 0 0 1 .586-.024q.281.165.281.492' />
    </g>
    <defs>
      <clipPath id='d7cd05549f4bd1873df0b85a5f8e266d__a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneCaptionBoldIcon);
export default ForwardRef;
