import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashMdBoldIcon = (
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
      <path d='M5.531 5.5q-.125 0-.187.125L4.75 6.5h4.531l-.594-.875Q8.595 5.5 8.47 5.5zm5.532 1h2.187q.687.063.75.75-.063.687-.75.75h-.375l-.75 10.156a1.96 1.96 0 0 1-.625 1.313q-.562.5-1.344.531H3.844a2.1 2.1 0 0 1-1.344-.531 1.96 1.96 0 0 1-.625-1.313L1.125 8H.75Q.063 7.937 0 7.25q.063-.687.75-.75h2.188l1.156-1.719Q4.625 4.031 5.53 4H8.47q.906.03 1.469.781zm.312 1.5h-8.75l.719 10.031q.093.438.5.469h6.312q.407-.03.5-.469z' />
    </g>
    <defs>
      <clipPath id='4c8091577e30a379accc2480689e76a9__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashMdBoldIcon);
export default ForwardRef;
