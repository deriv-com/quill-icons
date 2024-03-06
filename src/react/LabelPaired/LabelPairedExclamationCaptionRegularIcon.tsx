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
      <path d='M1.375 4.625v7.125q-.023.352-.375.375-.352-.023-.375-.375V4.625Q.648 4.273 1 4.25q.352.023.375.375M1 14.563Q.484 14.515.438 14q.045-.516.562-.562.516.045.563.562-.048.515-.563.563' />
    </g>
    <defs>
      <clipPath id='ba15b6345021b7a30f0e397b8057b59b__a'>
        <path d='M0 0h2v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationCaptionRegularIcon);
export default ForwardRef;
