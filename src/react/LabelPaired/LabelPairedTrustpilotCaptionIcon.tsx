import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrustpilotCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.242 11.96-2.742.727 3.89 2.813zm3.563-3.866L7.5 12.688 3.586 15.5l1.5-4.57-3.914-2.836H6L7.5 3.5l1.477 4.594z' />
    </g>
    <defs>
      <clipPath id='4274603472dd65731bb2e9a8f8cbd7ed__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrustpilotCaptionIcon);
export default ForwardRef;
