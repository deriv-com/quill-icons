import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.875-4.375A.9.9 0 0 0 7 5.5a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875M7 15.125c.957 0 1.75-.766 1.75-1.75 0-.082-.027-.191-.027-.273l3.199-1.997c.3-.19.41-.601.219-.902-.192-.3-.602-.41-.903-.219L8.012 11.98A1.62 1.62 0 0 0 7 11.625c-.984 0-1.75.793-1.75 1.75 0 .984.766 1.75 1.75 1.75M4.813 7.688a.9.9 0 0 0-.875-.875.88.88 0 0 0-.876.875c0 .492.383.875.876.875a.88.88 0 0 0 .874-.876m-2.188 3.937a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875c0 .492.383.875.875.875m8.313-3.937a.9.9 0 0 0-.876-.875.88.88 0 0 0-.874.875c0 .492.382.875.874.875a.88.88 0 0 0 .876-.876' />
    </g>
    <defs>
      <clipPath id='bdb0d2b99ec22b0277c069a06a7e4377__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxSmFillIcon);
export default ForwardRef;
