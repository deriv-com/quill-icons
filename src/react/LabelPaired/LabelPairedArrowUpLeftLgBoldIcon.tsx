import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.188 9.25h9.375q.858.078.937.938-.079.858-.937.937h-7.11l9.024 9.023q.546.665 0 1.329-.664.546-1.329 0l-9.023-9.024v7.11q-.079.858-.937.937-.86-.078-.938-.937v-9.375q.078-.86.938-.938' />
    </g>
    <defs>
      <clipPath id='8ea9899058c04036d477965146898914__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftLgBoldIcon);
export default ForwardRef;
