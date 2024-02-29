import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 5.75h5.25q.352.023.375.375-.023.352-.375.375H2.039l6.094 6.117q.234.258 0 .516-.258.234-.516 0L1.5 7.039v4.336q-.023.352-.375.375-.352-.023-.375-.375v-5.25q.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='eb041f48f8b485a98f26bf45b3be3247__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftCaptionRegularIcon);
export default ForwardRef;
