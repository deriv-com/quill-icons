import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.438 6.375q.41.027.437.438v6.125q-.027.41-.437.437-.411-.027-.438-.437v-5.06l-7.137 7.11q-.3.274-.601 0-.274-.3 0-.601l7.11-7.137h-5.06q-.41-.027-.437-.437.027-.411.438-.438z' />
    </g>
    <defs>
      <clipPath id='034e259ac2504065__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightSmRegularIcon);
export default ForwardRef;
