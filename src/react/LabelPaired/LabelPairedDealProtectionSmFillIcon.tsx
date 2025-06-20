import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealProtectionSmFillIcon = (
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
      <path d='M9.328 6.703h3.91c.383 0 .766.055 1.094.192.328.136.602.328.848.574.218.273.41.574.547.902.109.356.164.711.164 1.094 0 .41-.055.765-.164 1.12a3.2 3.2 0 0 1-.547.876c-.246.246-.52.437-.848.574a2.9 2.9 0 0 1-1.094.219H11.79v2.652H9.33zm3.965 2.324c-.027-.027-.082-.082-.246-.082h-1.258v1.04h1.258c.164 0 .219-.028.246-.055.027-.028.082-.082.082-.22v-.464c0-.164-.055-.191-.055-.219zM5.199 6.703c.52 0 1.04.082 1.477.246.465.192.875.438 1.203.793q.492.534.738 1.313c.164.52.246 1.093.246 1.75a5.7 5.7 0 0 1-.246 1.722q-.246.78-.738 1.313a3 3 0 0 1-1.203.793c-.438.164-.93.273-1.477.273H2V6.703zm.82 5.633c.165-.164.274-.438.274-.984V10.23c0-.546-.11-.82-.273-.984-.165-.164-.41-.273-.82-.273h-.712v3.636H5.2c.41 0 .656-.109.82-.273' />
    </g>
    <defs>
      <clipPath id='23458f926ab8d38d827de2f36f13a2d7__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionSmFillIcon);
export default ForwardRef;
