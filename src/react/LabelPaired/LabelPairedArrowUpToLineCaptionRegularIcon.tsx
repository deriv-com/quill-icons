import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineCaptionRegularIcon = (
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
      <path d='M.375 4.25h8.25q.352.023.375.375-.023.352-.375.375H.375Q.023 4.977 0 4.625q.023-.352.375-.375m4.383 2.367 3 3q.234.258 0 .516-.258.234-.516 0L4.875 7.789v6.586q-.023.352-.375.375-.352-.023-.375-.375V7.79l-2.367 2.343q-.258.234-.516 0-.234-.258 0-.516l3-3q.258-.234.516 0' />
    </g>
    <defs>
      <clipPath id='43d0571284ef64a4b13e83990bfdee52__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineCaptionRegularIcon);
export default ForwardRef;
