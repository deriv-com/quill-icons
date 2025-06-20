import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondMdBoldIcon = (
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
      <path d='M9.281 4.313a.964.964 0 0 1 1.406 0l3 3a.964.964 0 0 1 0 1.406l-3 3a.964.964 0 0 1-1.406 0l-3-3a.964.964 0 0 1 0-1.406zM2.25 6C3.469 6 4.5 7.031 4.5 8.25v4.031a2.23 2.23 0 0 1 1.406-.531c.563 0 1.125.25 1.532.656l1.906 1.906c.25.25.469.5.656.782.156-.281.375-.531.625-.781l1.906-1.907c.406-.406.969-.656 1.531-.656.563 0 1.063.219 1.438.531V8.25c0-1.219 1-2.25 2.25-2.25A2.26 2.26 0 0 1 20 8.25v6.781c0 .969-.406 1.938-1.094 2.656l-2.125 2.094c-.312.313-.781.313-1.062 0a.684.684 0 0 1 0-1.031l2.125-2.125c.406-.437.656-1 .656-1.594V8.25a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75v4.563a3.08 3.08 0 0 1-.906 2.156l-.5.5-.813.812-.5.5c-.312.313-.781.313-1.062 0a.684.684 0 0 1 0-1.031l.5-.5.812-.844c.125-.125.219-.312.219-.469 0-.374-.312-.656-.687-.656a.7.7 0 0 0-.47.188l-1.905 1.906c-.626.594-.938 1.438-.938 2.281v1.594A.74.74 0 0 1 10 20a.72.72 0 0 1-.75-.75v-1.594c0-.843-.344-1.687-.969-2.281l-1.906-1.906c-.125-.125-.312-.219-.469-.219-.375 0-.656.313-.656.688 0 .156.063.343.188.468l.843.813.5.5c.282.312.282.781 0 1.062-.312.313-.781.313-1.062 0l-.5-.5-.844-.812-.5-.5A3.05 3.05 0 0 1 3 12.813V8.25a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75v6.781c0 .594.219 1.156.656 1.594l2.125 2.094c.282.312.282.781 0 1.062-.312.313-.781.313-1.062 0l-2.125-2.093A3.7 3.7 0 0 1 0 15.03V8.25C0 7.031 1 6 2.25 6' />
    </g>
    <defs>
      <clipPath id='0bd464d626745269218c4aa5c9c966aa__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondMdBoldIcon);
export default ForwardRef;
