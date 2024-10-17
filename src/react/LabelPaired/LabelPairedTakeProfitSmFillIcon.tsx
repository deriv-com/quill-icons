import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitSmFillIcon = (
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
      <path d='M6.785 14.879V8.973h1.969V6.676H2.328v2.297h1.969v5.906zm2.188-8.203h3.91c.383 0 .765.082 1.094.219.328.136.601.328.847.574s.41.547.547.902c.11.328.164.711.164 1.094s-.055.765-.164 1.094c-.137.355-.3.629-.547.902-.246.246-.52.437-.847.574-.329.137-.711.192-1.094.192H11.46v2.652H8.973zM12.937 9c-.027-.027-.082-.055-.246-.055h-1.23v1.04h1.23c.164 0 .246-.055.274-.083.027-.027.055-.054.055-.218v-.465c0-.137-.028-.192-.055-.192z' />
    </g>
    <defs>
      <clipPath id='1aaac0df4163cf3c1d964a1dfde601ad__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitSmFillIcon);
export default ForwardRef;
