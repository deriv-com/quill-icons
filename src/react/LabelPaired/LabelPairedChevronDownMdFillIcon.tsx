import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownMdFillIcon = (
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
      <path d='m7.281 16.719-6-6a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0L8 14.593l5.281-5.28a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406l-6 6a.964.964 0 0 1-1.406 0' />
    </g>
    <defs>
      <clipPath id='b99acbde3505a6ead5153927e3fb029d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownMdFillIcon);
export default ForwardRef;
