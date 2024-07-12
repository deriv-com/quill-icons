import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.406 6.477 1.563 3.75c.273.625.117 1.367-.43 1.796l-1.914 1.602a13.12 13.12 0 0 0 6.25 6.25l1.602-1.914c.43-.547 1.171-.703 1.796-.43l3.75 1.563c.743.273 1.094 1.093.899 1.836l-.938 3.437c-.195.664-.78 1.133-1.484 1.133C7.813 25.5 0 17.688 0 8c0-.703.469-1.29 1.133-1.484l3.437-.938c.742-.195 1.563.156 1.836.899' />
    </g>
    <defs>
      <clipPath id='779e5ae0b2b6da980c867722f4de4033__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneLgFillIcon);
export default ForwardRef;
