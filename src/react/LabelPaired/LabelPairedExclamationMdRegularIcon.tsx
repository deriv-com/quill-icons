import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={24}
    viewBox='0 0 2 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5.5V15c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5M1 18.75A.72.72 0 0 1 .25 18a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75' />
    </g>
    <defs>
      <clipPath id='b00c49b7a91b6324bffd4a73d1ffeb79__a'>
        <path d='M0 0h2v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationMdRegularIcon);
export default ForwardRef;
