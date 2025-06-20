import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 4.625v4.047c.492.246.875.902.875 1.64 0 .766-.383 1.422-.875 1.668V16a.9.9 0 0 1-.547.82.88.88 0 0 1-.957-.191l-1.203-1.203a7 7 0 0 0-4.95-2.051H5.25v3.5c0 .492-.41.875-.875.875h-1.75a.864.864 0 0 1-.875-.875v-3.5c-.984 0-1.75-.766-1.75-1.75V9c0-.957.766-1.75 1.75-1.75h3.719c1.86 0 3.636-.738 4.949-2.05l1.203-1.177a.88.88 0 0 1 .957-.191.89.89 0 0 1 .547.793m-1.75 2.105C9.762 8.207 7.656 9 5.469 9H5.25v2.625h.219c2.187 0 4.293.82 5.906 2.297V6.73' />
    </g>
    <defs>
      <clipPath id='f700bba458ce92f70a2bfffb630c8eb7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornSmFillIcon);
export default ForwardRef;
