import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 4.625V14h2.25q.352.023.375.375-.023.352-.375.375H.375q-.352-.023-.375-.375.023-.352.375-.375h2.25V5.328L.961 6.43q-.305.165-.516-.094-.164-.304.094-.516l2.25-1.5a.4.4 0 0 1 .398-.023.37.37 0 0 1 .188.328' />
    </g>
    <defs>
      <clipPath id='80f25528fddd5edee8613e4eb89f8635__a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneCaptionRegularIcon);
export default ForwardRef;
