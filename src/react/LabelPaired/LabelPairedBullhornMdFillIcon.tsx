import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornMdFillIcon = (
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
      <path d='M15 5v4.625c.563.281 1 1.031 1 1.875 0 .875-.437 1.625-1 1.906V18c0 .406-.25.781-.625.938a1.01 1.01 0 0 1-1.094-.22l-1.375-1.374A8 8 0 0 0 6.25 15H6v4c0 .563-.469 1-1 1H3c-.562 0-1-.437-1-1v-4c-1.125 0-2-.875-2-2v-3c0-1.094.875-2 2-2h4.25a8 8 0 0 0 5.656-2.344l1.375-1.343a1.01 1.01 0 0 1 1.094-.22c.375.157.625.532.625.907m-2 2.406C11.156 9.094 8.75 10 6.25 10H6v3h.25c2.5 0 4.906.938 6.75 2.625V7.406' />
    </g>
    <defs>
      <clipPath id='31029322b41b20b9702e555de262759a__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornMdFillIcon);
export default ForwardRef;
