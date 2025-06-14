import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftMdRegularIcon = (
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
      <path d='M0 4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v15c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5zm5 5c0 .281.219.5.5.5h9c.25 0 .5-.219.5-.5v-2c0-.25-.25-.5-.5-.5h-9c-.281 0-.5.25-.5.5zm-1-2A1.5 1.5 0 0 1 5.5 6h9c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-9A1.48 1.48 0 0 1 4 9.5zm1 9c0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5v-2c0-.25-.25-.5-.5-.5h-5c-.281 0-.5.25-.5.5zm-1-2A1.5 1.5 0 0 1 5.5 13h5c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-5A1.48 1.48 0 0 1 4 16.5z' />
    </g>
    <defs>
      <clipPath id='38e5284ad57570660c3f03173af32e04__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftMdRegularIcon);
export default ForwardRef;
