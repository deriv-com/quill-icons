import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkCaptionBoldIcon = (
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
      <path d='M8.086 6.71 5.296 9.5l2.79 2.79q.328.397 0 .796-.399.328-.797 0L4.5 10.296l-2.79 2.79q-.397.328-.796 0-.328-.399 0-.797L3.704 9.5.913 6.71q-.328-.397 0-.796.398-.328.797 0L4.5 8.704l2.79-2.79q.397-.328.796 0 .328.399 0 .797' />
    </g>
    <defs>
      <clipPath id='38513bf84d3d934ea28c749d78b78355__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkCaptionBoldIcon);
export default ForwardRef;
