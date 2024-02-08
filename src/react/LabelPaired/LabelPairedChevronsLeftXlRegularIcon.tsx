import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftXlRegularIcon = (
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
      <path d='m2.484 17.484 9-9q.516-.468 1.032 0 .468.516 0 1.032L4.078 18l8.438 8.484q.468.516 0 1.032-.516.468-1.032 0l-9-9q-.468-.516 0-1.032m18-9q.516-.468 1.032 0 .468.516 0 1.032L13.078 18l8.438 8.484q.468.516 0 1.032-.516.468-1.032 0l-9-9q-.468-.516 0-1.032z' />
    </g>
    <defs>
      <clipPath id='b7804c95d43ff33e96f2bf79cb69700f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftXlRegularIcon);
export default ForwardRef;
