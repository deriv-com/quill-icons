import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashMdRegularIcon = (
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
      <path d='M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m5-3.5h1.281l.344-.344A.52.52 0 0 1 7 8h2c.125 0 .25.063.344.156l.344.344H11c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-.094l-.344 5.594c-.062.5-.5.906-1 .906H6.406a.984.984 0 0 1-.968-.906L5.063 9.5H5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m4.906 1H6.062l.344 5.5h3.157z' />
    </g>
    <defs>
      <clipPath id='77a40a8c2b24e006287d7616b0475bb0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashMdRegularIcon);
export default ForwardRef;
