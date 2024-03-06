import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankCaptionBoldIcon = (
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
      <path d='m6.281 3.57 5.297 2.93q.399.234.422.703a.77.77 0 0 1-.234.563.77.77 0 0 1-.563.234H.797a.77.77 0 0 1-.563-.234A.77.77 0 0 1 0 7.203.82.82 0 0 1 .422 6.5l5.297-2.93a.6.6 0 0 1 .562 0m-.937 3.305A.74.74 0 0 1 5.25 6.5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21q.21.212.21.54 0 .21-.094.375h3.282L6 4.695l-3.937 2.18zM1.5 8.75h1.125v3.75h1.5V8.75H5.25v3.75h1.5V8.75h1.125v3.75h1.5V8.75H10.5v3.75h.188q.514.047.562.563-.047.514-.562.562H1.5q-.516-.047-.562-.562.045-.516.562-.563zm-.75 5.625h10.688q.514.047.562.563-.047.514-.562.562H.75q-.516-.047-.562-.562.045-.516.562-.563' />
    </g>
    <defs>
      <clipPath id='3f625bf58e6f1ddf37f03a93c8823408__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankCaptionBoldIcon);
export default ForwardRef;
