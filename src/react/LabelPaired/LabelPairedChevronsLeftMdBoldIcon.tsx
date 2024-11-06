import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftMdBoldIcon = (
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
      <path d='m1.469 11.469 6-5.969c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031L3.031 12 8.5 17.5a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-6-6c-.313-.281-.313-.75 0-1.062m12-6V5.5c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031l-5.5 5.5L14.5 17.5a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-6-6c-.313-.281-.313-.75 0-1.062z' />
    </g>
    <defs>
      <clipPath id='907d9fb81bdd38517b870cd397eab28d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftMdBoldIcon);
export default ForwardRef;
