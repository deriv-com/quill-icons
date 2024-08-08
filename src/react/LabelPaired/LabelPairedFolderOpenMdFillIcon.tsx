import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenMdFillIcon = (
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
      <path d='M2.75 11 0 15.75V7c0-1.094.875-2 2-2h3.656c.532 0 1.032.219 1.407.594l.843.843c.375.375.875.563 1.407.563H13c1.094 0 2 .906 2 2v1H4.5c-.719 0-1.375.375-1.75 1m.875.5c.188-.312.5-.5.875-.5H17c.344 0 .688.219.844.531a.96.96 0 0 1 0 1l-3.5 6c-.188.282-.5.469-.844.469H1a1 1 0 0 1-.875-.5.96.96 0 0 1 0-1z' />
    </g>
    <defs>
      <clipPath id='48932cd4c24a47587eabdf8cb944db1b__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenMdFillIcon);
export default ForwardRef;
