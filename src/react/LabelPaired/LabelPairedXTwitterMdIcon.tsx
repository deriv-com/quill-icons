import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXTwitterMdIcon = (
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
      <path d='M12.156 5.5h2.219L9.563 11l5.656 7.5H10.78l-3.469-4.531L3.345 18.5H1.125l5.156-5.875L.844 5.5h4.531l3.156 4.156zm-.781 11.688h1.25L4.719 6.75H3.406z' />
    </g>
    <defs>
      <clipPath id='2d9f640e428eda3df45ba508168e04c5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterMdIcon);
export default ForwardRef;
