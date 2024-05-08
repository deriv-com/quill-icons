import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpLeftSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M8.75 7.688H4.594c-.383 0-.657.3-.657.656v4.375c0 .383.274.656.657.656a.65.65 0 0 0 .656-.656v-2.79l3.691 3.692c.246.274.657.274.93 0 .246-.246.246-.656 0-.93L6.152 9H8.75a.65.65 0 0 0 .656-.656c0-.356-.3-.656-.656-.656' />
    </g>
    <defs>
      <clipPath id='0ebb4607d650dffb4d47d183fa24c28b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpLeftSmFillIcon);
export default ForwardRef;
