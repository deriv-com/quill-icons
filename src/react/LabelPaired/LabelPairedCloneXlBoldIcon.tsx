import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneXlBoldIcon = (
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
      <path d='M3 27.75h10.5q.703-.046.75-.75v-3h2.25v3q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V16.5q.047-1.266.89-2.11.844-.843 2.11-.89h3v2.25H3q-.703.046-.75.75V27q.046.704.75.75m7.5-7.5H21q.704-.046.75-.75V9q-.046-.703-.75-.75H10.5q-.703.047-.75.75v10.5q.047.704.75.75m-3-.75V9q.047-1.266.89-2.11.844-.843 2.11-.89H21q1.266.047 2.11.89.843.844.89 2.11v10.5q-.047 1.266-.89 2.11-.844.843-2.11.89H10.5q-1.266-.047-2.11-.89-.843-.844-.89-2.11' />
    </g>
    <defs>
      <clipPath id='9dc333ea09d1d837daddf23af52f6750__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneXlBoldIcon);
export default ForwardRef;
