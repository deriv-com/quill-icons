import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusMdFillIcon = (
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
      <path d='M8 6.5V11h4.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1H8v4.5c0 .563-.469 1-1 1-.562 0-1-.437-1-1V13H1.5c-.562 0-1-.437-1-1 0-.531.438-1 1-1H6V6.5c0-.531.438-1 1-1 .531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='bdeb11f9c4541f03e2bac43a78816808__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusMdFillIcon);
export default ForwardRef;
