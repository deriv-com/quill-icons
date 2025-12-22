import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.938 18.563c-.282-.282-.282-.797 0-1.079l9-9c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079L2.53 18l8.485 8.484c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0z' />
    </g>
    <defs>
      <clipPath id='5dcc0730ae1dc4674441f3381b71e046__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftXlRegularIcon);
export default ForwardRef;
