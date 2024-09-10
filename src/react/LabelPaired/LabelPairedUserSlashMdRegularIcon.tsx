import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashMdRegularIcon = (
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
      <path d='M14 8a3.98 3.98 0 0 1-1.719 3.281l-.812-.656A3.01 3.01 0 0 0 13 8a3 3 0 0 0-3-3c-1.375 0-2.531.938-2.906 2.188L6.28 6.53C6.844 5.063 8.313 4 10 4c2.188 0 4 1.813 4 4m1.625 11 1 .813a.87.87 0 0 1-.562.187H3.906A.907.907 0 0 1 3 19.094C3 16 5.469 13.5 8.563 13.5h.093l1.281 1H8.564A4.575 4.575 0 0 0 4 19zM.781 4.125l19.032 15c.187.156.25.5.062.688a.467.467 0 0 1-.687.093l-19-15c-.22-.156-.282-.5-.094-.687.156-.219.5-.282.687-.094' />
    </g>
    <defs>
      <clipPath id='e6552c0a20d5d96c4b69630ce83bd88d__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashMdRegularIcon);
export default ForwardRef;
