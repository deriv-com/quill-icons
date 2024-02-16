import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.469 18.781-5.25-5.5q-.437-.562.031-1.062.531-.438 1.031 0l3.969 4.156V5.75Q5.313 5.063 6 5q.687.063.75.75v10.625l3.969-4.125q.5-.469 1.062-.031.438.5 0 1.062l-5.25 5.5A.72.72 0 0 1 6 19a.72.72 0 0 1-.531-.219' />
    </g>
    <defs>
      <clipPath id='4c367631cfeee271fbfbc467a709e42e__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownMdBoldIcon);
export default ForwardRef;
