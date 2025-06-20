import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.344 16.438.844.656A6.1 6.1 0 0 1 10.5 18v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V18A6.02 6.02 0 0 1 4 12.5H2.5A.494.494 0 0 1 2 12c0-.25.219-.5.5-.5H4c.063-.5.156-.969.313-1.437l.843.687C5.031 11.156 5 11.563 5 12c0 2.781 2.219 5 5 5 .844 0 1.656-.187 2.344-.562M9.5 6.03V4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v1.531a6.01 6.01 0 0 1 5.469 5.469H17.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1.531c-.031.5-.156 1-.313 1.438l-.844-.657c.126-.406.188-.844.188-1.281 0-2.75-2.25-5-5-5-.875 0-1.656.219-2.375.594l-.844-.657A6.24 6.24 0 0 1 9.5 6.032M10 15a2.986 2.986 0 0 1-3-2.812l1.719 1.374.031.032 1.75 1.375c-.156.031-.344.031-.5.031m-.531-5.937C9.625 9.03 9.813 9 10 9c1.594 0 2.875 1.25 2.969 2.844l-1.719-1.375-.031-.031zM.78 4.125l19.032 15c.187.156.25.5.062.688a.467.467 0 0 1-.687.093l-19-15c-.22-.156-.282-.5-.094-.687.156-.219.5-.282.687-.094' />
    </g>
    <defs>
      <clipPath id='b9769a14006cc3caa637a7bacb4a8de4__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashMdRegularIcon);
export default ForwardRef;
