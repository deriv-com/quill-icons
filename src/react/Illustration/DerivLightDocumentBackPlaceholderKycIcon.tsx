import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightDocumentBackPlaceholderKycIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 130 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M120.692 1H9.308C4.72 1 1 4.13 1 7.992v64.016C1 75.87 4.72 79 9.308 79h111.384c4.588 0 8.308-3.13 8.308-6.992V7.992C129 4.13 125.28 1 120.692 1'
    />
    <path
      fill='#84ABAE'
      d='M127 9H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h124a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2'
    />
    <path
      fill='#F2F2F2'
      d='M118 38H68a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h50a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M118 49H68a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h50a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M118 60H68a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h50a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M53 40H14a4 4 0 0 0-4 4v19a4 4 0 0 0 4 4h39a4 4 0 0 0 4-4V44a4 4 0 0 0-4-4'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightDocumentBackPlaceholderKycIcon);
export default ForwardRef;
