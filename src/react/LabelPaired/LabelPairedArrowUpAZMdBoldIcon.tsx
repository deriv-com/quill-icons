import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13 5q.47 0 .688.406l2.5 5q.217.656-.344 1.031-.657.22-1-.343l-.438-.844h-2.812l-.438.844q-.343.594-1 .344-.594-.375-.344-1.032l2.5-5A.86.86 0 0 1 13 5m-.656 3.75h1.312L13 7.438zM4.469 5.219q.531-.438 1.062 0l3 3q.438.531 0 1.062-.531.438-1.062 0L5.75 7.562V18.25q-.063.687-.75.75-.687-.063-.75-.75V7.563L2.531 9.28q-.531.438-1.062 0-.438-.531 0-1.062zM11 13h4q.47.03.688.438.187.437-.126.812l-2.906 3.25H15q.687.063.75.75-.063.687-.75.75h-4a.79.79 0 0 1-.687-.437q-.188-.438.124-.813l2.907-3.25H11q-.687-.063-.75-.75.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='95923d624f16968d6ad116df9d4b905f__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZMdBoldIcon);
export default ForwardRef;
