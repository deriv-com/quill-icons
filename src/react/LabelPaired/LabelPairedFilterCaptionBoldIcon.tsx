import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.234a.97.97 0 0 1 .96-.984h10.056a.99.99 0 0 1 .984.984.94.94 0 0 1-.234.61l-3.891 4.804V14a.76.76 0 0 1-.773.75.72.72 0 0 1-.47-.164l-2.155-1.711a.91.91 0 0 1-.352-.727v-1.5L.211 5.844A.92.92 0 0 1 0 5.234m1.29.141 3.82 4.71q.14.177.14.352v1.618l1.5 1.195v-2.812a.53.53 0 0 1 .117-.352l3.844-4.711z' />
    </g>
    <defs>
      <clipPath id='df397941bb75b16912e03a664fa0e657__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterCaptionBoldIcon);
export default ForwardRef;
