import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownXlRegularIcon = (
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
      <path d='M2.484 9.516q-.468-.516 0-1.032.516-.468 1.032 0L12 16.922l8.484-8.438q.516-.468 1.032 0 .468.516 0 1.032l-9 9q-.516.468-1.032 0zm0 9q-.468-.516 0-1.032.516-.468 1.032 0L12 25.922l8.484-8.438q.516-.468 1.032 0 .468.516 0 1.032l-9 9q-.516.468-1.032 0z' />
    </g>
    <defs>
      <clipPath id='0322f0d3b2f8c4cd6a51659736813d39__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownXlRegularIcon);
export default ForwardRef;
