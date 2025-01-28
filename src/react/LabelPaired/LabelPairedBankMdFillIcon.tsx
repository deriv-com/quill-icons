import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.594 4.094a1.12 1.12 0 0 1 .781 0l7 3c.438.187.688.656.594 1.125A.97.97 0 0 1 15 9v.25a.74.74 0 0 1-.75.75H1.75A.72.72 0 0 1 1 9.25V9c-.5 0-.906-.312-1-.781a1.01 1.01 0 0 1 .594-1.125zM4 11v6h1.25v-6h2v6h1.5v-6h2v6H12v-6h1.969v6.156c.031 0 .062 0 .062.032l1.5 1c.375.25.531.687.406 1.125A.975.975 0 0 1 15 20H1c-.469 0-.844-.281-.969-.687a.99.99 0 0 1 .407-1.125l1.5-1c0-.032.03-.032.062-.032V11zm4-5c-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1' />
    </g>
    <defs>
      <clipPath id='709412e7120e7b2906e93049d281bcf2__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankMdFillIcon);
export default ForwardRef;
