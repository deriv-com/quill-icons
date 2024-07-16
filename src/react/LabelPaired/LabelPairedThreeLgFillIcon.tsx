import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 8c0-.664.547-1.25 1.25-1.25h9.375c.508 0 .977.352 1.133.82a1.21 1.21 0 0 1-.313 1.367l-5.117 4.688h.86a5.32 5.32 0 0 1 5.312 5.313 5.293 5.293 0 0 1-5.312 5.312H4.352a4.42 4.42 0 0 1-3.907-2.383l-.078-.156a1.24 1.24 0 0 1 .547-1.68 1.24 1.24 0 0 1 1.68.547l.078.156c.312.625.976 1.016 1.68 1.016h3.085a2.826 2.826 0 0 0 2.813-2.812c0-1.524-1.29-2.813-2.812-2.813H3.375a1.24 1.24 0 0 1-1.172-.781 1.21 1.21 0 0 1 .313-1.367L7.633 9.25H1.5C.797 9.25.25 8.703.25 8' />
    </g>
    <defs>
      <clipPath id='6a9bbbb49a14a8ca4aa7576ffb4cf0a9__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeLgFillIcon);
export default ForwardRef;
