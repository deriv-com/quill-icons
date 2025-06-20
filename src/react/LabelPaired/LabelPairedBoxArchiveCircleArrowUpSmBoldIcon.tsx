import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowUpSmBoldIcon = (
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
      <path d='M.25 5.5c0-.465.383-.875.875-.875h12.25a.9.9 0 0 1 .875.875v2.188c0 .492-.41.875-.875.875H1.125a.864.864 0 0 1-.875-.876zm.875 3.938h1.313v5.687c0 .246.19.438.437.438h6.453c.164.492.438.93.766 1.312H2.875c-.984 0-1.75-.766-1.75-1.75zm.438-3.5V7.25h11.375V5.938zm3.062 4.593c0-.355.273-.656.656-.656H9.22c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H5.28a.63.63 0 0 1-.656-.656m5.25 3.281c0-1.394.738-2.706 1.969-3.39a3.9 3.9 0 0 1 3.937 0 3.93 3.93 0 0 1 1.969 3.39 3.97 3.97 0 0 1-1.969 3.419c-1.23.71-2.734.71-3.937 0a3.92 3.92 0 0 1-1.969-3.419m2.078-.519a.463.463 0 0 0 0 .629.463.463 0 0 0 .629 0c.246-.274.52-.52.793-.793v2.434c0 .246.191.437.438.437a.45.45 0 0 0 .437-.437v-2.434c.246.273.52.52.766.793a.463.463 0 0 0 .629 0 .463.463 0 0 0 0-.629l-1.532-1.531a.463.463 0 0 0-.629 0z' />
    </g>
    <defs>
      <clipPath id='3893a38d21a776dcca37750306a8b39c__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowUpSmBoldIcon);
export default ForwardRef;
