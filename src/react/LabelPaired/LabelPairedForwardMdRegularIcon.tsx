import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardMdRegularIcon = (
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
      <path d='M14.813 12 8 7.063v9.906zM7.937 6c.188 0 .375.063.532.188l7.219 5.218c.187.156.312.375.312.594 0 .25-.125.469-.312.625l-7.22 5.219a1.05 1.05 0 0 1-.53.156.92.92 0 0 1-.938-.937v-3.22l-5.531 4A1.05 1.05 0 0 1 .937 18 .92.92 0 0 1 0 17.063V6.938C0 6.438.406 6 .938 6c.187 0 .375.063.53.188l5.532 4v-3.25c0-.5.406-.938.938-.938M7 12.625v-1.219L1 7.062v9.907z' />
    </g>
    <defs>
      <clipPath id='de7985a9b68e25a809ba1787ced001cc__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardMdRegularIcon);
export default ForwardRef;
