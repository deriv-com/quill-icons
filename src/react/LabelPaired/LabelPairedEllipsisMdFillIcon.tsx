import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 12c0-.625.313-1.187.875-1.5.531-.312 1.188-.312 1.75 0 .531.313.875.875.875 1.5 0 .656-.344 1.219-.875 1.531-.562.313-1.219.313-1.75 0C.563 13.22.25 12.656.25 12m5 0c0-.625.313-1.187.875-1.5.531-.312 1.188-.312 1.75 0 .531.313.875.875.875 1.5 0 .656-.344 1.219-.875 1.531-.562.313-1.219.313-1.75 0-.562-.312-.875-.875-.875-1.531M12 10.25c.625 0 1.188.344 1.5.875.313.563.313 1.219 0 1.75a1.68 1.68 0 0 1-1.5.875c-.656 0-1.219-.312-1.531-.875-.313-.531-.313-1.187 0-1.75A1.76 1.76 0 0 1 12 10.25' />
    </g>
    <defs>
      <clipPath id='b064cf30c2b13d1409672fcf1d35daa2__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisMdFillIcon);
export default ForwardRef;
