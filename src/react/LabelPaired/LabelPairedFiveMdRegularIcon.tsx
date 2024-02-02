import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveMdRegularIcon = (
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
      <path d='M1.531 5.375Q1.625 5.031 2 5h6.5q.47.031.5.5-.03.47-.5.5H2.406l-1.25 5H6q1.688.03 2.844 1.156Q9.969 13.313 10 15q-.03 1.688-1.156 2.844Q7.687 18.969 6 19H2.656a2.73 2.73 0 0 1-1.469-.406 2.62 2.62 0 0 1-1-1.125l-.124-.25q-.188-.407.218-.657.437-.188.657.22l.156.25q.5.936 1.562.968H6q1.282-.03 2.125-.875Q8.969 16.282 9 15q-.03-1.28-.875-2.125Q7.282 12.032 6 12H.5a.5.5 0 0 1-.406-.187.62.62 0 0 1-.094-.438z' />
    </g>
    <defs>
      <clipPath id='fd89b6bf2e8467b6__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveMdRegularIcon);
export default ForwardRef;
