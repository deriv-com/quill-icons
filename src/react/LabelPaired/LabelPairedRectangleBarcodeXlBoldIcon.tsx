import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9.75q-.703.047-.75.75v15q.046.704.75.75h21q.704-.046.75-.75v-15q-.046-.703-.75-.75zm-3 .75q.047-1.266.89-2.11.844-.843 2.11-.89h21q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11zM5.625 12q1.032.095 1.125 1.125v9.75Q6.657 23.907 5.625 24q-1.03-.093-1.125-1.125v-9.75q.095-1.03 1.125-1.125M9 12q.703.047.75.75v10.5q-.047.704-.75.75-.703-.046-.75-.75v-10.5q.047-.703.75-.75m2.25 1.125q.095-1.03 1.125-1.125 1.032.095 1.125 1.125v9.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125zM17.625 12q1.032.095 1.125 1.125v9.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-9.75q.094-1.03 1.125-1.125m3.375.75q.046-.703.75-.75.704.047.75.75v10.5q-.046.704-.75.75-.704-.046-.75-.75z' />
    </g>
    <defs>
      <clipPath id='6519a856b6aa826d88d125f9b6b38dd1__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeXlBoldIcon);
export default ForwardRef;
