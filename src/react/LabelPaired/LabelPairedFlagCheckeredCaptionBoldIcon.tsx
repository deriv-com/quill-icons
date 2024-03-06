import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredCaptionBoldIcon = (
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
      <path d='M.813 3.5q.514.047.562.563v.656l1.992-.492a3.95 3.95 0 0 1 2.672.28 3.7 3.7 0 0 0 1.711.423q.891 0 1.734-.422l.211-.094q.399-.187.703.024.329.188.352.609v6.562q-.024.493-.492.704l-.797.304q-1.71.61-3.328-.187a4.27 4.27 0 0 0-2.883-.305l-1.875.469v2.344q-.047.514-.562.562-.516-.047-.563-.562V4.063q.047-.516.563-.563m.562 3.54 1.875-.423V5.422l-1.875.469zm0 1.148v1.101l1.875-.422V7.79zm0 2.25v1.007l1.617-.422q.117-.022.258-.046v-.938zm3 .445a5.4 5.4 0 0 1 2.25.539v-1.149l-1.29-.398a2.2 2.2 0 0 0-.96-.07zm3.375.867a3.2 3.2 0 0 0 1.313-.187l.562-.211V10.25l-.61.14a4.3 4.3 0 0 1-1.265.094zm1.875-2.648V8l-.61.14a4.3 4.3 0 0 1-1.265.094V9.36q.516.047 1.031-.07zm0-2.25V5.68q-.914.375-1.875.375v1.054q.516.048 1.031-.07zm-3-.938a4.3 4.3 0 0 1-1.102-.398 2.9 2.9 0 0 0-1.148-.282v1.172q.657-.022 1.266.14l.984.306zm0 2.11-1.29-.399a2.2 2.2 0 0 0-.96-.07V8.68q.657-.047 1.266.117l.984.305z' />
    </g>
    <defs>
      <clipPath id='debb69add0dc2e17c8ee7096cfbb589f__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredCaptionBoldIcon);
export default ForwardRef;
