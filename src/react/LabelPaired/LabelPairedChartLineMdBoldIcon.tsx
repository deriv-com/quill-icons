import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineMdBoldIcon = (
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
      <path d='M1.5 5.75v11c0 .438.313.75.75.75h13a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-13C1 19 0 18 0 16.75v-11A.74.74 0 0 1 .75 5a.76.76 0 0 1 .75.75m13.281 3.531-4.281 4.25a.684.684 0 0 1-1.031 0L7 11.062l-2.469 2.47c-.312.312-.781.312-1.062 0a.684.684 0 0 1 0-1.032l3-3c.125-.156.312-.219.531-.219.188 0 .375.063.531.219L10 11.969l3.719-3.719c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031' />
    </g>
    <defs>
      <clipPath id='038620cd2013eb2c7f4ed26488ea0c2f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineMdBoldIcon);
export default ForwardRef;
