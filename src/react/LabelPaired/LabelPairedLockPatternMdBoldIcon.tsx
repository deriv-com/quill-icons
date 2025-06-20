import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 6c0-.937.781-1.75 1.75-1.75.688 0 1.281.438 1.563 1h2.843c.281-.562.875-1 1.594-1 .688 0 1.281.438 1.563 1h2.843c.281-.562.875-1 1.594-1 .938 0 1.75.813 1.75 1.75 0 .969-.812 1.75-1.75 1.75a1.8 1.8 0 0 1-.594-.094l-3.781 3.782c.063.187.125.374.125.562 0 .969-.812 1.75-1.75 1.75-.219 0-.406-.031-.594-.094L5.781 17.25h2.625c.281-.562.875-1 1.594-1 .688 0 1.281.438 1.563 1h2.843c.281-.562.875-1 1.594-1 .938 0 1.75.813 1.75 1.75 0 .969-.812 1.75-1.75 1.75a1.74 1.74 0 0 1-1.594-1h-2.844a1.73 1.73 0 0 1-1.562 1 1.74 1.74 0 0 1-1.594-1H5.562a1.73 1.73 0 0 1-1.562 1c-.969 0-1.75-.781-1.75-1.75 0-.937.781-1.75 1.75-1.75.188 0 .375.063.563.125l3.78-3.781A1.8 1.8 0 0 1 8.25 12c0-.937.781-1.75 1.75-1.75.188 0 .375.063.563.125l3.624-3.625h-2.624a1.73 1.73 0 0 1-1.563 1 1.74 1.74 0 0 1-1.594-1H5.562A1.73 1.73 0 0 1 4 7.75c-.969 0-1.75-.781-1.75-1.75m0 6c0 .656.313 1.219.875 1.531.531.313 1.188.313 1.75 0 .531-.312.875-.875.875-1.531 0-.625-.344-1.187-.875-1.5-.562-.312-1.219-.312-1.75 0A1.68 1.68 0 0 0 2.25 12m12 0c0 .656.313 1.219.875 1.531.531.313 1.188.313 1.75 0A1.76 1.76 0 0 0 17.75 12c0-.625-.344-1.187-.875-1.5-.562-.312-1.219-.312-1.75 0a1.68 1.68 0 0 0-.875 1.5' />
    </g>
    <defs>
      <clipPath id='1823bce7ff49139615b7ed302c6bd3f4__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternMdBoldIcon);
export default ForwardRef;
