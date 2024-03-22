import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10c0-2.75 2.219-5 5-5 2.75 0 5 2.25 5 5v4c0 2.781-2.25 5-5 5-2.781 0-5-2.219-5-5zm5-3.5c-1.937 0-3.5 1.594-3.5 3.5v4c0 1.938 1.563 3.5 3.5 3.5 1.906 0 3.5-1.562 3.5-3.5v-4c0-1.906-1.594-3.5-3.5-3.5' />
    </g>
    <defs>
      <clipPath id='f72d3d0dd9f7c05c913fd1d686d9e115__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroMdBoldIcon);
export default ForwardRef;
