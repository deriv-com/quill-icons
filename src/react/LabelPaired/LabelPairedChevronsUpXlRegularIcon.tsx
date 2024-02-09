import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpXlRegularIcon = (
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
      <path d='m12.516 8.484 9 9q.468.516 0 1.032-.516.468-1.032 0L12 10.078l-8.484 8.438q-.516.468-1.032 0-.468-.516 0-1.032l9-9q.516-.468 1.032 0m9 18q.468.516 0 1.032-.516.468-1.032 0L12 19.078l-8.484 8.438q-.516.468-1.032 0-.468-.516 0-1.032l9-9q.516-.468 1.032 0z' />
    </g>
    <defs>
      <clipPath id='8158007c30aaf5f85a989fb96caa1019__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpXlRegularIcon);
export default ForwardRef;
