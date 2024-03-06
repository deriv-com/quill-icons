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
      <path d='M5.223 4.625h3.554q.903.054 1.258.902l.274.848h1.941q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-7q.027-.738.52-1.23.492-.493 1.23-.52h1.941l.301-.848q.33-.848 1.23-.902m-.41 1.176L4.43 6.949a.45.45 0 0 1-.41.301H1.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v7q0 .383.246.629A.85.85 0 0 0 1.75 16h10.5a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-7a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246H9.98a.45.45 0 0 1-.41-.3L9.187 5.8a.45.45 0 0 0-.41-.3H5.223a.45.45 0 0 0-.41.3M7 14.688a3 3 0 0 1-1.531-.41 3 3 0 0 1-1.121-1.122 3 3 0 0 1-.41-1.531q0-.82.41-1.531a3 3 0 0 1 1.12-1.121q.712-.41 1.532-.41t1.531.41 1.121 1.12q.41.712.41 1.532t-.41 1.531a3 3 0 0 1-1.12 1.121q-.712.41-1.532.41m-2.187-3.063q.027 1.23 1.093 1.887 1.095.6 2.188 0 1.065-.657 1.094-1.887-.028-1.23-1.094-1.887-1.095-.6-2.188 0-1.065.657-1.093 1.887' />
    </g>
    <defs>
      <clipPath id='04bcb50f44f7899ebb96141af475edad__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraSmRegularIcon);
export default ForwardRef;
