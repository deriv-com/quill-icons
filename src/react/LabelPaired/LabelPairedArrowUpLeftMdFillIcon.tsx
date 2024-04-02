import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftMdFillIcon = (
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
      <path d='M2 7h7c.531 0 1 .469 1 1 0 .563-.469 1-1 1H4.406l6.282 6.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L3 10.437V15c0 .563-.469 1-1 1-.562 0-1-.437-1-1V8c0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='7d838be175ecd1435015c86b07665f12__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftMdFillIcon);
export default ForwardRef;
