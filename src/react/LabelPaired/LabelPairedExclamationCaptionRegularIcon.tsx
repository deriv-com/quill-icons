import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={18}
    viewBox='0 0 2 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 4.625v7.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375M1 14.563A.54.54 0 0 1 .438 14c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563' />
    </g>
    <defs>
      <clipPath id='9e6c99b531d3db00a4b6b153efbb403a__a'>
        <path d='M0 0h2v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationCaptionRegularIcon);
export default ForwardRef;
