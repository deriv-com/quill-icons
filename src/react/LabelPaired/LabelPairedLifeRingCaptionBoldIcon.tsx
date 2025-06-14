import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingCaptionBoldIcon = (
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
      <path d='m9.023 13.344-1.898-1.899c-.328.211-.727.305-1.125.305-.422 0-.82-.094-1.148-.305l-1.899 1.899A4.93 4.93 0 0 0 6 14.375c1.125 0 2.18-.375 3.023-1.031m1.594 0 .258.281a.513.513 0 0 1 0 .773.513.513 0 0 1-.773 0l-.282-.257a6.075 6.075 0 0 1-7.664 0l-.281.257a.513.513 0 0 1-.773 0c-.235-.21-.235-.562 0-.796l.257-.258a6.075 6.075 0 0 1 0-7.664l-.257-.282c-.235-.21-.235-.562 0-.796.21-.211.562-.211.796 0l.258.28C3.211 4.04 4.523 3.5 6 3.5c1.453 0 2.766.54 3.82 1.383l.282-.258c.21-.234.562-.234.796 0a.55.55 0 0 1 0 .773l-.28.282C11.46 6.734 12 8.047 12 9.5c0 1.477-.54 2.79-1.383 3.844m-.797-.797A4.95 4.95 0 0 0 10.875 9.5c0-1.125-.398-2.18-1.055-3.023L7.922 8.375c.21.328.328.727.328 1.125 0 .422-.117.82-.328 1.148zM9.023 5.68A4.93 4.93 0 0 0 6 4.625 4.95 4.95 0 0 0 2.953 5.68l1.899 1.898c.328-.21.726-.328 1.125-.328.421 0 .82.117 1.148.328zm-4.968 4.968c-.211-.328-.305-.726-.305-1.125 0-.421.094-.82.305-1.148L2.156 6.477A4.9 4.9 0 0 0 1.125 9.5c0 1.148.375 2.203 1.031 3.047zm.82-1.148c0 .422.21.773.563.984.328.211.773.211 1.125 0 .328-.21.562-.562.562-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.125 0c-.352.21-.563.562-.563.96' />
    </g>
    <defs>
      <clipPath id='53f48c569e75fdfc7cecac6237754504__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingCaptionBoldIcon);
export default ForwardRef;
