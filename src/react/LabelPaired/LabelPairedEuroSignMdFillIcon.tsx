import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 11.5H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.875C2.781 6.906 5.313 5 8.25 5H9c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-.75a4.76 4.76 0 0 0-4.187 2.5H8c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3.5v1H8c.531 0 1 .469 1 1 0 .563-.469 1-1 1H4.063C4.843 16 6.438 17 8.25 17H9c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-.75c-2.937 0-5.469-1.875-6.375-4.5H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.5v-1' />
    </g>
    <defs>
      <clipPath id='04e0debfc26974ab2bd6924a9a7660ac__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignMdFillIcon);
export default ForwardRef;
