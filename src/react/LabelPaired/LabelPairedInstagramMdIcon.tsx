import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInstagramMdIcon = (
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
      <path d='M7 8.406c1.969 0 3.594 1.625 3.594 3.594 0 2-1.625 3.594-3.594 3.594C5 15.594 3.406 14 3.406 12A3.594 3.594 0 0 1 7 8.406m0 5.938c1.281 0 2.313-1.031 2.313-2.344A2.307 2.307 0 0 0 7 9.688c-1.312 0-2.344 1.03-2.344 2.312A2.34 2.34 0 0 0 7 14.344m4.563-6.063a.84.84 0 0 0-.844-.844.84.84 0 0 0-.844.844.84.84 0 0 0 .844.844.84.84 0 0 0 .844-.844m2.374.844c.063 1.156.063 4.625 0 5.781-.062 1.125-.312 2.094-1.124 2.938-.813.812-1.813 1.062-2.938 1.125-1.156.062-4.625.062-5.781 0-1.125-.063-2.094-.313-2.938-1.125C.344 17 .094 16.03.031 14.906c-.062-1.156-.062-4.625 0-5.781C.094 8 .344 7 1.156 6.188 2 5.375 2.97 5.125 4.094 5.063 5.25 5 8.719 5 9.875 5.063 11 5.125 12 5.375 12.813 6.188 13.625 7 13.875 8 13.937 9.125m-1.5 7c.376-.906.282-3.094.282-4.125 0-1 .094-3.187-.281-4.125-.25-.594-.72-1.094-1.313-1.312C10.188 6.188 8 6.28 7 6.28c-1.031 0-3.219-.093-4.125.282a2.4 2.4 0 0 0-1.344 1.312C1.156 8.813 1.25 11 1.25 12c0 1.031-.094 3.219.281 4.125a2.37 2.37 0 0 0 1.344 1.344c.906.375 3.094.281 4.125.281 1 0 3.188.094 4.125-.281.594-.25 1.094-.719 1.313-1.344' />
    </g>
    <defs>
      <clipPath id='e9d2fc0a1087cc29ec3ae5d81d596ca0__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInstagramMdIcon);
export default ForwardRef;
