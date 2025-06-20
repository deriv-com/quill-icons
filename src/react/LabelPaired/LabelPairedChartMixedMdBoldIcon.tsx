import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m15.719 6.344-5.25 4.5a.8.8 0 0 1-.969 0L5.938 7.719l-4.782 3.156a.717.717 0 0 1-1.031-.187c-.25-.344-.156-.813.188-1.063l5.25-3.5a.75.75 0 0 1 .906.063L10 9.28l4.75-4.094a.78.78 0 0 1 1.063.094.78.78 0 0 1-.094 1.063M6.25 17.5v-5a.27.27 0 0 0-.25-.25.246.246 0 0 0-.25.25v5c0 .156.094.25.25.25.125 0 .25-.094.25-.25M6 11c.813 0 1.5.688 1.5 1.5v5A1.5 1.5 0 0 1 6 19a1.48 1.48 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 6 11m-3.75 6.5v-2a.27.27 0 0 0-.25-.25.246.246 0 0 0-.25.25v2c0 .156.094.25.25.25.125 0 .25-.094.25-.25M2 14c.813 0 1.5.688 1.5 1.5v2A1.5 1.5 0 0 1 2 19a1.48 1.48 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 2 14m8.25.5a.27.27 0 0 0-.25-.25.246.246 0 0 0-.25.25v3c0 .156.094.25.25.25.125 0 .25-.094.25-.25zm-1.75 0A1.5 1.5 0 0 1 10 13c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 10 19a1.48 1.48 0 0 1-1.5-1.5zm5.75 3v-5a.27.27 0 0 0-.25-.25.247.247 0 0 0-.25.25v5c0 .156.094.25.25.25.125 0 .25-.094.25-.25M14 11c.813 0 1.5.688 1.5 1.5v5A1.5 1.5 0 0 1 14 19a1.48 1.48 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 14 11' />
    </g>
    <defs>
      <clipPath id='62ce9d03f5cc9941be76d30ea00cdb74__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedMdBoldIcon);
export default ForwardRef;
