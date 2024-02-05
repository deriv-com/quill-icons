import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.688 16.242 4.374 1.875q.509.235.782.742.234.469.117 1.016l-.938 4.375q-.312 1.172-1.523 1.25h-.703a4 4 0 0 0-.547-.04q-4.57-.39-8.242-2.773a17.5 17.5 0 0 1-5.82-6.21Q.038 12.687 0 8q.078-1.21 1.25-1.523l4.375-.938a1.38 1.38 0 0 1 1.016.156q.508.235.742.742l1.875 4.376q.39 1.055-.469 1.835l-1.562 1.29a11.94 11.94 0 0 0 4.336 4.335l1.289-1.562q.78-.86 1.835-.469M17.5 24.25q.234 0 .313-.234l.937-4.375q.038-.274-.195-.352l-4.375-1.875q-.195-.078-.352.078l-1.289 1.602q-.703.703-1.601.273a12.9 12.9 0 0 1-4.805-4.805q-.43-.897.273-1.601l1.602-1.29q.156-.155.078-.35L6.21 6.944q-.117-.234-.352-.195l-4.375.938Q1.25 7.766 1.25 8q.039 4.53 2.227 8.203a16 16 0 0 0 5.82 5.82q3.672 2.188 8.203 2.227' />
    </g>
    <defs>
      <clipPath id='34cafb405083a6c42695c5b36ebe7fa3__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneLgRegularIcon);
export default ForwardRef;
