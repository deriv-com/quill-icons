import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 14c0 .21.164.375.375.375h6A.385.385 0 0 0 7.875 14V7.25H6a.74.74 0 0 1-.75-.75V4.625H1.5A.385.385 0 0 0 1.125 5zM1.5 3.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m3.563 6.563v3a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562v-3c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563m2.062.75v2.25a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562v-2.25c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563M3 11.563v1.5a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562v-1.5c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563' />
    </g>
    <defs>
      <clipPath id='8efbb960cb69be4bade3690b4b9653ea__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnCaptionBoldIcon);
export default ForwardRef;
