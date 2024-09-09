import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.375 6.625a2 2 0 0 0-2.781 0l-5.75 5.75a3.395 3.395 0 0 0 0 4.781 3.395 3.395 0 0 0 4.781 0l4.75-4.75a.85.85 0 0 1 1.219 0 .85.85 0 0 1 0 1.219l-4.75 4.75c-2 2-5.219 2-7.219 0s-2-5.219 0-7.219l5.75-5.75a3.64 3.64 0 0 1 5.219 0 3.64 3.64 0 0 1 0 5.219l-5.5 5.5a2.245 2.245 0 0 1-3.219 0 2.245 2.245 0 0 1 0-3.219l4.5-4.5a.85.85 0 0 1 1.219 0 .85.85 0 0 1 0 1.219l-4.5 4.5a.61.61 0 0 0 0 .781.61.61 0 0 0 .781 0l5.5-5.5a2 2 0 0 0 0-2.781' />
    </g>
    <defs>
      <clipPath id='f0f6865f0473f19d4308de4b436394e0__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipMdFillIcon);
export default ForwardRef;
