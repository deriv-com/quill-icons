import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageMdFillIcon = (
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
      <path d='M0 7c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm10.094 3.344A.71.71 0 0 0 9.5 10a.72.72 0 0 0-.625.344l-2.719 4-.843-1.063A.76.76 0 0 0 4.75 13a.77.77 0 0 0-.594.281l-2 2.5a.78.78 0 0 0-.094.813c.126.25.376.406.688.406h10.5c.25 0 .531-.125.656-.375a.78.78 0 0 0-.062-.781zM3.5 10c.531 0 1-.281 1.281-.75.282-.437.282-1.031 0-1.5C4.5 7.313 4.031 7 3.5 7c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75' />
    </g>
    <defs>
      <clipPath id='86acfb4bf02ceb521cd0938b2ec889e6__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageMdFillIcon);
export default ForwardRef;
