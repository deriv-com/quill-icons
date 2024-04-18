import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderMdFillIcon = (
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
      <path d='M3 5h1v2H3c-.562 0-1 .469-1 1v1H0V8a3 3 0 0 1 3-3m-3 5h2v4H0zm12 0h2v4h-2zm2-1h-2V8c0-.531-.469-1-1-1h-1V5h1a3 3 0 0 1 3 3zm0 6v1a3 3 0 0 1-3 3h-1v-2h1c.531 0 1-.437 1-1v-1zM2 15v1c0 .563.438 1 1 1h1v2H3a3 3 0 0 1-3-3v-1zm3 4v-2h4v2zM5 7V5h4v2z' />
    </g>
    <defs>
      <clipPath id='d2e90c9ccf4e06955d2bc7811d8cde66__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderMdFillIcon);
export default ForwardRef;
