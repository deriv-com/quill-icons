import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.688 22.922a4 4 0 0 1 1.078-1.735l14.25-14.296q.938-.844 2.109-.844 1.22 0 2.11.844l1.874 1.875.375.468a3 3 0 0 1 .47 1.922q-.095 1.032-.845 1.828L8.86 27.234l-.187.188q-.703.61-1.594.89l-3.656 1.079-1.969.562q-.656.187-1.125-.281-.468-.47-.281-1.125l.562-1.969zm2.156.61-.281 1.124-.797 2.578 2.578-.75 1.125-.328q.422-.14.797-.468l10.687-10.735-2.906-2.906L4.359 22.734l-.046.047-.047.047a2.3 2.3 0 0 0-.422.703' />
    </g>
    <defs>
      <clipPath id='5ce73b11f85b8f50e0e20f89248ee00a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenXlBoldIcon);
export default ForwardRef;
