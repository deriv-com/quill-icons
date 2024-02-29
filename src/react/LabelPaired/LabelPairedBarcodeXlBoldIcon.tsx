import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 7.5q1.032.095 1.125 1.125v18.75q-.093 1.032-1.125 1.125Q.095 28.407 0 27.375V8.625Q.095 7.595 1.125 7.5m4.125 0q.704.046.75.75v19.5q-.046.704-.75.75-.703-.046-.75-.75V8.25q.046-.703.75-.75m3.375 0q1.032.095 1.125 1.125v18.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125V8.625q.095-1.03 1.125-1.125m5.25 0q1.032.095 1.125 1.125v18.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125V8.625q.095-1.03 1.125-1.125m7.875 1.125q.094-1.03 1.125-1.125 1.032.095 1.125 1.125v18.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125zm-3-.375q.046-.703.75-.75.704.046.75.75v19.5q-.046.704-.75.75-.704-.046-.75-.75z' />
    </g>
    <defs>
      <clipPath id='f06771f1ac04f2f2c41065f10d27ba08__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeXlBoldIcon);
export default ForwardRef;
