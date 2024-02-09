import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.617 13.133 4.5 10.039l-3.094 3.094q-.28.21-.539 0-.21-.258 0-.516L3.961 9.5.867 6.406q-.21-.28 0-.539.258-.21.54 0L4.5 8.961l3.117-3.094q.258-.21.516 0 .21.258 0 .54L5.039 9.5l3.094 3.117q.21.258 0 .516-.258.21-.516 0' />
    </g>
    <defs>
      <clipPath id='ba463872d784936aa36f1a3d4ea968f6__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkCaptionRegularIcon);
export default ForwardRef;
