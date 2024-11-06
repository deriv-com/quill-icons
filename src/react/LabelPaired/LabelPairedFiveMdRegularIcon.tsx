import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5.406C1.563 5.156 1.75 5 2 5h6.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2.375l-1.25 5H6c2.188 0 4 1.813 4 4 0 2.219-1.812 4-4 4H2.625c-1.031 0-2-.562-2.469-1.5l-.125-.25c-.125-.25 0-.562.219-.687a.513.513 0 0 1 .688.218l.125.282c.312.593.906.968 1.562.968H6a3 3 0 0 0 0-6H.5a.53.53 0 0 1-.406-.219.5.5 0 0 1-.094-.406z' />
    </g>
    <defs>
      <clipPath id='9e55902c7ae3be4ff84b6d84b42772c2__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveMdRegularIcon);
export default ForwardRef;
