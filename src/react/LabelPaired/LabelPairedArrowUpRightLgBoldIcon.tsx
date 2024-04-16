import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.813 9.25a.95.95 0 0 1 .937.938v9.375c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-7.11l-9.023 9.024c-.391.39-.977.39-1.329 0a.856.856 0 0 1 0-1.29l9.024-9.023h-7.11a.925.925 0 0 1-.937-.937c0-.547.39-.938.938-.938h9.375z' />
    </g>
    <defs>
      <clipPath id='a696c6a75ec1fce0f02ae09cbb1a4e24__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightLgBoldIcon);
export default ForwardRef;
