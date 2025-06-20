import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowDownSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.5c0-.465.383-.875.875-.875h12.25a.9.9 0 0 1 .875.875v2.188c0 .492-.41.875-.875.875H1.125a.864.864 0 0 1-.875-.876zm.875 3.938h1.313v5.687c0 .246.19.438.437.438h6.453c.164.492.438.93.766 1.312H2.875c-.984 0-1.75-.766-1.75-1.75zm.438-3.5V7.25h11.375V5.938zm3.062 4.593c0-.355.273-.656.656-.656H9.22c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H5.28a.63.63 0 0 1-.656-.656m5.25 3.281c0-1.394.738-2.706 1.969-3.39a3.9 3.9 0 0 1 3.937 0 3.93 3.93 0 0 1 1.969 3.39 3.97 3.97 0 0 1-1.969 3.419c-1.23.71-2.734.71-3.937 0a3.92 3.92 0 0 1-1.969-3.419m2.078-.082a.463.463 0 0 0 0 .63c.52.492 1.04 1.011 1.531 1.53a.463.463 0 0 0 .63 0c.519-.519 1.011-1.038 1.53-1.53a.463.463 0 0 0 0-.63.463.463 0 0 0-.628 0c-.246.274-.52.52-.766.793v-2.46a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438v2.46c-.273-.273-.547-.52-.793-.793a.463.463 0 0 0-.629 0' />
    </g>
    <defs>
      <clipPath id='c7e8ccdfccd920140dca988443547aff__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownSmBoldIcon);
export default ForwardRef;
