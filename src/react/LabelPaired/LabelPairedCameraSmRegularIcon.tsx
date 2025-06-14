import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraSmRegularIcon = (
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
      <path d='M5.223 4.625H8.75c.574 0 1.066.383 1.258.902l.273.848h1.969c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75h1.941l.274-.848c.191-.52.683-.902 1.258-.902m-.438 1.176-.383 1.176a.42.42 0 0 1-.41.273H1.75a.88.88 0 0 0-.875.875v7c0 .492.383.875.875.875h10.5a.88.88 0 0 0 .875-.875v-7a.9.9 0 0 0-.875-.875H9.98a.41.41 0 0 1-.41-.3L9.187 5.8c-.082-.163-.246-.3-.437-.3H5.223c-.192 0-.356.137-.438.3M7 14.688a3.01 3.01 0 0 1-2.652-1.532 2.94 2.94 0 0 1 0-3.062A3.07 3.07 0 0 1 7 8.563c1.094 0 2.078.601 2.625 1.53a2.94 2.94 0 0 1 0 3.063A3 3 0 0 1 7 14.687m-2.187-3.063c0 .793.41 1.504 1.093 1.914.657.383 1.504.383 2.188 0 .656-.41 1.094-1.121 1.094-1.914 0-.766-.438-1.477-1.094-1.887-.684-.383-1.531-.383-2.188 0-.683.41-1.093 1.121-1.093 1.887' />
    </g>
    <defs>
      <clipPath id='1490daca877f54b24b5f3a6d53fb191b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraSmRegularIcon);
export default ForwardRef;
