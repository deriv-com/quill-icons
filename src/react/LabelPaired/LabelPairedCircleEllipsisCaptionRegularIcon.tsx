import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEllipsisCaptionRegularIcon = (
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
      <path d='M6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25 5.228 5.228 0 0 0-9.07 0 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5m.563 6a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562m1.687-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562M4.313 9.5a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562' />
    </g>
    <defs>
      <clipPath id='ed1e2f3fe5908573b674e697ceffa924__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEllipsisCaptionRegularIcon);
export default ForwardRef;
