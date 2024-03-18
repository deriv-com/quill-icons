import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxMdFillIcon = (
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
      <path d='M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m9-5c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1M8 17c1.094 0 2-.875 2-2 0-.094-.031-.219-.031-.312l3.656-2.282c.344-.219.469-.687.25-1.031s-.687-.469-1.031-.25l-3.688 2.281A1.86 1.86 0 0 0 8 13c-1.125 0-2 .906-2 2 0 1.125.875 2 2 2M5.5 8.5c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1M3 13c.531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1m9.5-4.5c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1' />
    </g>
    <defs>
      <clipPath id='3262acac99a4e38cf6ea30d6e667b6a1__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxMdFillIcon);
export default ForwardRef;
