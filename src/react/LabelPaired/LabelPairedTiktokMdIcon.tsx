import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokMdIcon = (
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
      <path d='M14 10.563c-1.406.03-2.719-.407-3.844-1.22v5.595c0 2.124-1.312 4-3.312 4.75A5.04 5.04 0 0 1 1.25 18.28 5.12 5.12 0 0 1 .594 12.5c1-1.844 3.062-2.875 5.187-2.594v2.813a2.36 2.36 0 0 0-2.625.844c-.562.843-.562 1.937.031 2.75a2.33 2.33 0 0 0 2.594.843 2.345 2.345 0 0 0 1.625-2.218V4h2.75c0 .25 0 .469.063.719a3.7 3.7 0 0 0 1.687 2.5A3.75 3.75 0 0 0 14 7.844z' />
    </g>
    <defs>
      <clipPath id='00511821563d56198cce45ea38907c4d__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokMdIcon);
export default ForwardRef;
