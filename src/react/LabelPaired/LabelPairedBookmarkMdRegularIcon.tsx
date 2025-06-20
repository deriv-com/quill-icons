import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.5A1.5 1.5 0 0 1 1.5 4h9c.813 0 1.5.688 1.5 1.5v13.813c0 .406-.312.687-.719.687a.8.8 0 0 1-.375-.094L6 16.625l-4.937 3.281A.8.8 0 0 1 .688 20C.28 20 0 19.719 0 19.313zM1.5 5c-.281 0-.5.25-.5.5v13.25l4.719-3.156a.54.54 0 0 1 .531 0L11 18.75V5.5c0-.25-.25-.5-.5-.5z' />
    </g>
    <defs>
      <clipPath id='4ffb8ff3f23be82bfd0c2c5cf28d3d33__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkMdRegularIcon);
export default ForwardRef;
