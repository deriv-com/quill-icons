import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.984 18.516q-.468-.516 0-1.032l9-9q.516-.468 1.032 0 .468.516 0 1.032L2.578 18l8.438 8.484q.468.516 0 1.032-.516.468-1.032 0z' />
    </g>
    <defs>
      <clipPath id='d95d646abde601fc40f2b9f25a779e4b__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftXlRegularIcon);
export default ForwardRef;
