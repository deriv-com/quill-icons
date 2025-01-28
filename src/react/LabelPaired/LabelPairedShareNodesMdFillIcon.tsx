import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11 11a3.07 3.07 0 0 1-2.094-.812L5.97 11.656c0 .094.031.219.031.344 0 .156-.031.25-.031.375l2.937 1.469A3.1 3.1 0 0 1 11 13a3 3 0 1 1-3 3v-.344l-2.937-1.469C4.53 14.688 3.78 15 3 15a3 3 0 0 1 0-6c.781 0 1.531.344 2.063.844L8 8.375V8a3 3 0 1 1 3 3' />
    </g>
    <defs>
      <clipPath id='2de6bba67c030d657117e78fb69d0c16__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesMdFillIcon);
export default ForwardRef;
