import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkSmRegularIcon = (
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
      <path d='M9.137 14.988 5.5 11.378l-3.61 3.61q-.327.246-.628 0-.246-.3 0-.601l3.61-3.637-3.61-3.61q-.246-.328 0-.628.3-.246.629 0l3.609 3.61 3.637-3.61q.3-.246.601 0 .246.3 0 .629l-3.61 3.609 3.61 3.637q.246.3 0 .601-.3.246-.601 0' />
    </g>
    <defs>
      <clipPath id='8e81262d5e2705cd80bc26f65d6caa51__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkSmRegularIcon);
export default ForwardRef;
