import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxCaptionRegularIcon = (
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
      <path d='M6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25 5.228 5.228 0 0 0-9.07 0 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5m.563 2.25A.555.555 0 0 1 6 6.313a.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562m-1.313 6c0 .422.328.75.75.75.398 0 .75-.328.75-.75A.77.77 0 0 0 6 11a.755.755 0 0 0-.75.75m-.75 0c0-.82.656-1.5 1.5-1.5.398 0 .773.164 1.031.445l2.508-1.5a.37.37 0 0 1 .516.117.37.37 0 0 1-.117.516l-2.508 1.5q.07.21.07.422c0 .844-.68 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5m4.688-4.875a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562M2.25 8.938a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562m1.688-2.063a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562' />
    </g>
    <defs>
      <clipPath id='ef62262699d889f6163648f269b093af__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxCaptionRegularIcon);
export default ForwardRef;
